import { StyleSheet } from 'react-native';

const filterblock =  StyleSheet.create({

    wrapper : {
        display:'flex',
        flexDirection:'column',
        width:'25%',
        height: 120,
        gap: 5,
        marginBottom: 5,



    },
    container : {
        borderRadius: 15,
        display: 'flex',
        height:'100%',
        padding:10,
        flexDirection:'column',
        alignItems:"center",
        backgroundColor: 'white',
        

        
    },

    important : {
        width:'35%',
    },

    big : {
        height: '100%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-end',

    },

    search : {
        width:'100%',
        height: '37.5%',
        borderRadius: 10,
    },

    image : {
        width: 40,
        height:40,
        alignSelf:'center',
        aspectRatio: 1/1,
        objectFit: 'cover',
        resizeMode: 'contain',
        marginBottom: 10
        
    },
    imageBig : {
        width:60,
        height:60
    }

});

export default filterblock