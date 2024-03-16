import { StyleSheet } from "react-native";

const homeheader =  StyleSheet.create({

    wrapper : {
        backgroundColor: 'white',
        height:100,
        width:'100%',
        marginTop: 20,
        alignItems:'center',
        paddingHorizontal:40,
        gap:20,
        justifyContent:'center'

    },
    button : {
        alignItems:'center',
        gap:5

    },
    image : {
        maxWidth:40,
        maxHeight:40,
        resizeMode:'contain'
    },
    active :{
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }
})

export default homeheader