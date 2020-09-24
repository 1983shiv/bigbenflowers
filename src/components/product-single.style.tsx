const styles = {
  wrapper: {
    "#relatedProducts": {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: "20px",
    },
  },
  product: {
    "@media only screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: "40%",
    borderRadius: "4px",
    border: `1px solid #f0f0f0`,
    overflow: "hidden",
    "@media only screen and (max-width: 1280px)": {
      width: "50%",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
    },
    "&.has-items": {
      width: "50%",
      display: "flex",
      flexWrap: "wrap",
      border: `0`,
      "@media only screen and (max-width: 1280px)": {
        width: "60%",
      },
      "@media only screen and (max-width: 768px)": {
        width: "100%",
      },
      ".gatsby-image-wrapper": {
        margin: "5px",
        // width: 'calc(50% - 10px)',
        width: "calc(100%)",
        borderRadius: "4px",
        border: `1px solid #f0f0f0`,
      },
    },
  },
  content: {
    width: "50%",
    paddingTop: "10px",
    paddingLeft: "30px",
    overflow: "hidden",
    "@media only screen and (max-width: 1280px)": {
      width: "50%",
    },
    "@media only screen and (max-width: 768px)": {
      width: "100%",
      paddingLeft: "0",
      paddingTop: "30px",
    },
    h1: {
      color: "primary",
      fontSize: "22px",
      lineHeight: "1.4",
      fontWeight: 600,
      marginBottom: ["20px", "30px"],
      "@media only screen and (max-width: 480px)": {
        fontSize: "20px",
      },
    },
    p: {
      fontSize: ["14px", "15px"],
      lineHeight: "1.86",
    },
  },
  header: {
    borderBottom: `1px solid #EBEBEB`,
    // paddingBottom: ["25px", "30px"],
    // marginBottom: ["25px", "30px"],
  },
  price: {
    color: "primary",
    fontSize: "26px",
    lineHeight: "1.538",
    fontWeight: 600,
    "@media only screen and (max-width: 480px)": {
      fontSize: "24px",
    },
  },
  cartArea: {
    alignItems: "center",
    justifyContent: "space-between",
    ".addToCart": {
      minWidth: "120px",
      fontSize: "15px",
      fontWeight: 600,
    },
  },
  cartCounter: {
    display: "flex",
    alignItems: "center",
    minWidth: [130, 172],
    minHeight: [40, 50],
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "primary",
    transition: "all 0.2s ease",
    div: {
      width: [50, 72],
      color: "white",
      textAlign: "center",
      fontSize: 0,
      fontWeight: "700",
      paddingLeft: 0,
      paddingRight: 0,
    },
    button: {
      padding: 0,
      minWidth: [40, 50],
      minHeight: [40, 50],
      svg: {
        width: 24,
        height: 24,
        marginLeft: 0,
      },
    },
  },
  tagArea: {
    margin: ["30px 0", "40px 0"],
    color: "primary",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    span: {
      display: "inline-block",
      color: "#919191",
      margin: "2.5px",
      padding: "4px 12px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: 600,
      border: `1px solid #DBDBDB`,
    },
  },
  tagTitle: {
    fontSize: ["14px", "15px"],
    marginRight: "12px",
    marginTop: "5px",
  },
  addxtratoProduct: {
    padding: "10px",
    span: {
      fontSize: "11px !important",
    },
    h4: {
      fontSize: "11px !important",
      textAlign: "center",
      height: "50px",
    },
  },
};

export default styles;
