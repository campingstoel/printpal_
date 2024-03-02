import { StyleSheet } from "react-native";

const listItem = StyleSheet.create({
    list : {
        width: "100%",
        alignItems: "center",
        padding: 10,
    },
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,

    },
    listItem: {
        padding: 10,
        margin: 5,
        backgroundColor: "white",
        width: "75%",
        height: 100,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contactButton: {
        padding: 10,
        margin: 5,
        backgroundColor: "white",
        width: "20%",
        height: 100,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    });

export default listItem;