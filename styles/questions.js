import { StyleSheet } from "react-native";

const questionsForm = StyleSheet.create({
    wrapper : {
        flex: 1,
        backgroundColor: 'white',
        width:'100%',
        padding:40,
        display:'flex',

    },
    question : {
        flex: 1,
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },

    answer: {
        marginVertical:40,
        width:'100%'

    },
    buttons: {
        gap:50,
        marginTop: 30,
    },

})

export default questionsForm