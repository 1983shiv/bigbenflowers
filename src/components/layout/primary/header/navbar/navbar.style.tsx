const styles = {
  navbar: {
    display: "flex",
    width: "100%",
    minHeight: 60,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(41, 41, 41, 0.06)",
    ".container": {
      display: "flex",
      alignItems: "center",
    },
  },
  rightPart: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    a: {
      display: "flex",
      color: "primary",
      textDecoration: "none",
      marginLeft: 15,
      transition: "color 0.2s",
      svg: {
        width: 18,
        height: 18,
      },
      ":hover": {
        color: "menu",
      },
    },
    button: {
      svg: {
        width: 17,
        height: 17,
      },
    },
  },
  search: {
    width: 420,
    "@media only screen and (max-width: 1200px)": {
      width: 520,
    },
  },
  mainMenu: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    marginX: -16,
    "@media only screen and (max-width: 1080px)": {
      marginX: 0,
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "90px 30px 110px",
    },
    li: {
      listStyle: "none",
      "a, span": {
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "@media only screen and (max-width: 1080px)": {
          width: "100%",
        },
      },
    },
  },
  mainMenuItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginX: 16,
    "@media only screen and (max-width: 1080px)": {
      width: "100%",
      marginX: 0,
      alignItems: "flex-start",
      flexDirection: "column",
    },
    "> a, > span": {
      color: "menu",
      fontSize: 1,
      minHeight: [50, 60],
    },
    "> svg": {
      marginX: "5px",
      "@media only screen and (max-width: 1080px)": {
        position: "absolute",
        top: "25px",
        right: 0,
      },
    },
    ":hover": {
      color: "black",
      "> a, > span": {
        color: "black",
        "&.active": {
          fontWeight: "600",
        },
      },
      ul: {
        opacity: 1,
        visibility: "visible",
        "@media only screen and (max-width: 1080px)": {
          opacity: 0,
          visibility: "hidden",
          "&.active": {
            opacity: 1,
            visibility: "visible",
          },
        },
        li: {
          marginY: 0,
        },
      },
    },
    "&.active": {
      ul: {
        opacity: 1,
        visibility: "visible",
        height: "max-content",
        li: {
          marginY: 0,
        },
      },
    },
  },
  submenu: {
    opacity: 0,
    visibility: "hidden",
    width: 260,
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    paddingTop: 9,
    paddingBottom: 12,
    paddingX: 0,
    top: "100%",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    borderTopColor: "text",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    boxShadow: "0 2px 4px rgba(41, 41, 41, 0.06)",
    transition: "opacity 0.2s ease",
    zIndex: 1,
    "@media only screen and (max-width: 1080px)": {
      width: "100%",
      borderTop: 0,
      borderRadius: 0,
      borderLeftWidth: 3,
      borderLeftStyle: "solid",
      borderLeftColor: "muted",
      boxShadow: "none",
      position: "inherit",
      padding: 0,
      height: 0,
      top: 0,
    },
    li: {
      marginY: -1,
      transition: "margin 0.2s ease",
      a: {
        color: "primary",
        paddingY: 10,
        paddingX: 20,
        fontSize: "14px",
        position: "relative",
        "@media only screen and (min-width: 1081px)": {
          "&:hover": {
            color: "black",
            textDecoration: "underline",
          },
          "&.active": {
            color: "black",
            fontWeight: "600",
          },
        },
        "@media only screen and (max-width: 1080px)": {
          "&:hover, &.active": {
            color: "black",
            fontWeight: "600",
          },
        },
      },
    },
  },
  badge: {
    minWidth: "14px",
    minHeight: "16px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "700",
    backgroundColor: "primary",
    position: "absolute",
    top: "9px",
    right: "60px",
    paddingLeft: "2px",
    paddingRight: "2px",
  },
};

export default styles;
