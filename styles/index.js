import { StyleSheet } from 'react-native';

const index =  StyleSheet.create({
    wrapper : {
        flex: 1,
        alignItems: 'center',
        maxHeight: '100%',
        backgroundColor:'white'
        
    },

    body : {
        width: '100%',
        flex: 1,
        paddingBottom: 100,
        backgroundColor: '#e7e7e7',
    },  

    row : {
        display:'flex',
        flexDirection:'row'

    },
    column : {
        display:'flex',
        flexDirection:'column'
    },
    centered: {
        alignItems:'center',
        justifyContent: 'center'
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
});

export default index;