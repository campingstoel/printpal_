import { StyleSheet } from "react-native";

const navbar = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },

  active: {
    color: "#c83564",
  },

  text: {
    color: "black",
    fontWeight: "bold",
  },

  grey: {
    color: "grey",
  },

  pressed : {
    borderBottomColor: '#c83564',
    borderBottomWidth: 2,
  }


});

export default navbar;
