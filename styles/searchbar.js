import { StyleSheet } from 'react-native';

const searchBar =  StyleSheet.create({

    searchBar : {
        backgroundColor: '#eeeeee',
        borderRadius: 30,
        padding: 10,
        justifyContents: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        marginTop: 50,
        marginBottom:20,
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