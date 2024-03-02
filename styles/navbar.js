import { StyleSheet } from "react-native";

const navbar = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    position: "absolute",
    bottom: '0%',
    maxHeight: 80,
    borderTopWidth: 1,
    borderColor: '#a1a1a1'

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
    color: "#a1a1a1",
    fontFamily: "Poppins-Regular"
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
