import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Button({style, text, onPress}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    wide: {
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
});

