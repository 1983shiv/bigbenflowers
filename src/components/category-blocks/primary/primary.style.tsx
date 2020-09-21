const styles = {
  wrapper: {
    py: [20, 30],
  },
  grid: {
    gridGap: [20, 30],
    gridTemplateColumns: "1fr",
    "@media only screen and (min-width: 568px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media only screen and (min-width: 992px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
};

export default styles;
