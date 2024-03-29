import { StyleSheet } from 'react-native';

const filters =  StyleSheet.create({
    wrapper : {
        paddingHorizontal: 10,
        width: '100%',

    },
    
    buttons : {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        justifyContent: 'space-between'
    },

    header : {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 15
    },

    filterButtons : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '55%',
        gap: 10,
        backgroundColor: 'red',
    }   
});

export default filters;