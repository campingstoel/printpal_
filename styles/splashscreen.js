import { StyleSheet } from "react-native";

const splashscreen = StyleSheet.create({
    dot: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: 'transparent',
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dotInner: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.8,
      },

});

export default splashscreen;