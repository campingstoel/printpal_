import { StyleSheet } from 'react-native';
import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;


const header =  StyleSheet.create({
    large : {
        fontSize: getFontSize(40),
    },
    medium : {
        fontSize: getFontSize(30),
    },
    small : {
        fontSize: getFontSize(25),
    },
    tiny : {
        fontSize: getFontSize(20),
    },
    interMedium : {
        fontSize: getFontSize(17),
    },
    paragraph : {
        fontSize: getFontSize(15),
    },
    smallest : {
        fontSize: getFontSize(13),
    },
    bold : {
        fontFamily: 'Poppins-Bold',
    },
    semiBold : {
        fontFamily: 'Poppins-SemiBold',
    },
    centered: {
        alignSelf:'center'
    },

    hlBlue : {
        color: '#49b3b7'
    },
    
});

export default header;

