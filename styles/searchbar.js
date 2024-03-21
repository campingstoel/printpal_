import { StyleSheet } from 'react-native';

const searchBar =  StyleSheet.create({

    wrapper : {
        paddingHorizontal: 20,
        marginTop: -30,

        
    },

    searchBar : {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
        justifyContents: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height:60,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },


});

export default searchBar;