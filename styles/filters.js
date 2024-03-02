import { StyleSheet } from 'react-native';

const filters =  StyleSheet.create({
    wrapper : {
        backgroundColor:'white',
        paddingHorizontal: 10,
        marginTop:10,

    },
    
    buttons : {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',

        width: '100%',
    },

    header : {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 10,
    }
});

export default filters;