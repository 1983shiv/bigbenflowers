const styles = {
  wrapper: {
    padding: 30,
    marginBottom: 30,
    borderRadius: 6,
    backgroundColor: "white",
    ":last-child": {
      marginBottom: 0,
    },
    h3: {
      color: "primary",
      fontSize: ["17px", 2],
    },
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: ["space-between", "flex-start"],
    marginBottom: [20, 30],
    button: {
      textDecoration: "underline",
      marginLeft: [0, "5px"],
    },
  },
  productGrid: {
    gridGap: 30,
    gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
    marginBottom: [-15, -30],
    ".productCard": {
      marginBottom: [15, 30],
    },
  },
};

export default styles;

// gridTemplateColumns: [
// 	'1fr 1fr',
// 	'1fr 1fr 1fr',
// 	'1fr 1fr 1fr 1fr',
// 	'1fr 1fr 1fr 1fr 1fr',
// ],
