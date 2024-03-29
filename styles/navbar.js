import { StyleSheet } from "react-native";

const navbar = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fafafa",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    position: "absolute",
    bottom: '0%',
    maxHeight: 70,

  },
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",

  },

  active: {
    color: "#6b9080",
  },

  text: {
    color: "#a1a1a1",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },

  grey: {
    color: "grey",
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },

  pressed : {
    borderBottomColor: '#c83564',
    borderBottomWidth: 2,
  }


});

export default navbar;
