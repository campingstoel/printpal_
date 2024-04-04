import { StyleSheet } from "react-native";

const filterblock = StyleSheet.create({
  wrapper: {
    width: "25%",
    height: 120,
    gap: 5,
    marginBottom: 5,
  },
  important: {
    width: "35%",
  },
  image: {
    aspectRatio: 1 / 1,
    objectFit: "cover",
    resizeMode: "contain",
  },
});

export default filterblock;
