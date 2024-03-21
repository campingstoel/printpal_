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
        marginTop: 20,
        width: 300,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 15,
        padding: 10,
        backgroundColor: '#f3f3f3',
    },

    image : {
        width: '100%',
        height: '65%',
        resizeMode: 'contain',
        objectFit: 'cover',
        display: 'flex',
        borderRadius: 20,
        marginBottom: 10,

        
    },

    text : {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
    },

    subText : {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Poppins-Regular',
    },

    button : {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 2,
        position: 'absolute',
        top: 20,
        right: 20,
    }
   
})

export default stories