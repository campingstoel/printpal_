import { StyleSheet } from "react-native";

const homeheader =  StyleSheet.create({

    wrapper : {
        height:250,
        width:'100%',
        gap:20,
        backgroundColor:'#87CEEB',
    },
    header : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        paddingHorizontal:20,
        height:100,
    },
    button : {
        alignItems:'center',
        gap:5

    },
    image : {
        maxWidth:40,
        maxHeight:40,
        // resizeMode:'contain',
        borderRadius:50,
    },
    filterWrapper: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        flexWrap:'wrap',
        gap:10,
        justifyContent:'center',
    },
    filter: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height:55,
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
        
    },
 
    text : {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
    },
})

export default homeheader