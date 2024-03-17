import { StyleSheet } from "react-native";


const stories = StyleSheet.create({
    wrapper: {
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 20,
        paddingHorizontal: 20,


    },
    story : {
        width: 300,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginRight: 15,
    },

    overlay : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,

    },
    image : {
        width: '100%',
        height: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    },

    text : {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins-Bold',
    },

    subText : {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Poppins-Regular',
    },

    button : {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        position: 'absolute',
        top: 20,
        right: 20,
    }
   
})

export default stories