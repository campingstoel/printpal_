import { StyleSheet } from 'react-native';

const index =  StyleSheet.create({
    wrapper : {
        backgroundColor:'white'
        
    },
    screenAware : {
        marginTop:50
    },

    body : {
        width: '100%',
        flex: 1,
        paddingBottom: 100,
        backgroundColor: '#e7e7e7',
    },  

    header : {
        backgroundColor: 'white',
        marginBottom: 10,
    },

    row : {
        display:'flex',
        flexDirection:'row'

    },
    column : {
        display:'flex',
        flexDirection:'column'
    },
    alignCenter: {
        alignItems: 'center'
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
    fullWidth : {
        width: '100%',
    },
    pad20: {
        marginHorizontal: 20
    },
    bgBlack: {
        backgroundColor: 'black'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
});

export default index;