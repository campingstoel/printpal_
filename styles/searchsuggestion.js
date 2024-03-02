import { StyleSheet } from "react-native";

const searchsuggestion = StyleSheet.create({

    wrapper: {
        width: "100%",
        justifyContent: "space-between",

    },
    iconWrapper : {
        width: 40,
        height: 40,
        backgroundColor: '#ededed',
        borderRadius: 50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    listItem: {
        padding: 10,
        backgroundColor: "white",
        width: "100%",
        height: 80,
        borderRadius: 15,
        borderBottomColor:'#ededed',
        borderBottomWidth:1,
        paddingHorizontal:40,
        gap: 15,

    },


    });

export default searchsuggestion;