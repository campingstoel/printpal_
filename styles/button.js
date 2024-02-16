import { StyleSheet } from 'react-native';

const button =  StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,

    },
    transparent : {
        backgroundColor: 'transparent',
    },
    large: {
        width: '100%',
    },
    medium : {
        width: '50%',
    },
    small : {
        width: '25%',
    },
    thumb : {
        width: '10%',
        aspectRatio: 1,
    },
    rounded: {
        borderRadius: 10,
    },
    circle : {
        borderRadius: 50,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    bold : {
        fontWeight: 'bold',
    },
    icon : {
        padding: 0,
        gap: 0,
        width: 25,
        justifyContent: 'left',
        
    },
});

export default button;

