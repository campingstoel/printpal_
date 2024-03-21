import { StyleSheet } from "react-native";

const homeheader =  StyleSheet.create({

    wrapper : {
        height:325,
        width:'100%',
        gap:20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',

    },
    header : {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        height:100,
        gap:20,
        paddingHorizontal:20,
    },
    button : {
        alignItems:'center',
        gap:5

    },
    image : {
        maxWidth:40,
        maxHeight:40,
        borderRadius:50,
        //darken the image
    },




    filterWrapper: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap',
        gap:10,
        justifyContent:'center',
        paddingHorizontal:10,
        marginTop:50,
    },
    filter: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height:50,
        borderRadius:50,
        width:'45%',
        backgroundColor:'white',
        // marginHorizontal:10,
        paddingHorizontal:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal:20,
        gap:10,

    },

    imageBackground : {
        width:'100%',
        height:'100%',
        display:'flex',
        resizeMode:'contain',
        objectFit:'cover',
        
    },
 
    text : {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
    },
})

export default homeheader