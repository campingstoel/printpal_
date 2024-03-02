import { StyleSheet } from 'react-native';

const filterblock =  StyleSheet.create({

    wrapper : {
        display:'flex',
        flexDirection:'column',
        width:'22.5%',
        height: 100,
        gap: 5,
        marginBottom: 10,


    },
    container : {
        backgroundColor: '#e8e8e8',
        borderRadius: 20,
        display: 'flex',
        height:'75%',
        padding:10,
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent:'center'
        
    },
    important : {
        width:'47.5%'
    },

    big : {
        height: '100%',
    },

    image : {
        width: 45,
        height:45,
        alignSelf:'center',
        aspectRatio: 1/1,
        
    },
    imageBig : {
        width:60,
        height:60
    }

});

export default filterblock