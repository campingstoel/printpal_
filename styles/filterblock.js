import { StyleSheet } from 'react-native';

const filterblock =  StyleSheet.create({

    wrapper : {
        display:'flex',
        flexDirection:'column',
        width:'30%',
        height: 100,
        gap: 5,
        marginBottom: 10,


    },
    container : {
        backgroundColor: '#e8e8e8',
        borderRadius: 20,
        display: 'flex',
        height:'110%',
        padding:10,
        flexDirection:'column',
        alignItems:"center",
        justifyContent:'flex-end',

        
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
        width: 50,
        height:50,
        alignSelf:'center',
        aspectRatio: 1/1,
        marginBottom: 5
        
    },
    imageBig : {
        width:60,
        height:60
    }

});

export default filterblock