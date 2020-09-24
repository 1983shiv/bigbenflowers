import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

const Accordion = ({ data }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const contentH = useRef(null);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${contentH.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <>
      {data.map((d, index) => {
        return (
          <div className="accordion__section" key={index}>
            <button
              className={`accordion ${setActive}`}
              onClick={(e) => toggleAccordion(e)}
            >
              <p className="accordion__title">{d.title}</p>
              <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
              ref={contentH}
              style={{ maxHeight: `${setHeight}` }}
              className="accordion__content"
            >
              <div
                className="accordion__text"
                dangerouslySetInnerHTML={{ __html: d.content }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
