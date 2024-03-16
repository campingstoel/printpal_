import { StyleSheet } from "react-native";

const questionsForm = StyleSheet.create({
    wrapper : {
        backgroundColor: 'white',
        width:'100%',
        display:'flex',

    },
    question : {
        flex: 1,
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',

    },
    image : {
        width: '100%',
        height: 250,
        marginBottom: 20,

    },

    answer: {
        width:'100%',
        flex:1,
        paddingVertical: 40,
        paddingHorizontal: 20,


    },
    buttons: {
        position:'absolute',
        bottom: 20,
        width:'100%',
        display:'flex',
        alignSelf: 'center',


    },

})

export default questionsForm