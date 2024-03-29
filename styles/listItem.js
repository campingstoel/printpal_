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
        paddingHorizontal: 20,
        marginTop: 10,

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

    },
    contactButton: {
        padding: 10,
        margin: 5,
        backgroundColor: "white",
        width: "20%",
        height: 100,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    });

export default listItem;