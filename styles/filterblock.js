import { StyleSheet } from 'react-native';

const filterblock =  StyleSheet.create({

    wrapper : {
        display:'flex',
        flexDirection:'column',
        width:'25%',
        height: 100,
        gap: 5,
        marginBottom: 5,


    },
    container : {
        borderRadius: 20,
        display: 'flex',
        height:'100%',
        padding:10,
        flexDirection:'column',
        alignItems:"center",

        
    },
    important : {
        width:'47.5%',
    },

    big : {
        height: '100%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-end',

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