import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";
import searchsuggestion from "../../styles/searchsuggestion";
import index from "../../styles";


export default function SearchSuggestion({ style, title, onPress, address }) {
    return (
        <View style={[searchsuggestion.wrapper, index.row]}>
        <TouchableOpacity style={[searchsuggestion.listItem, index.row]} onPress={onPress}>
        <View style={searchsuggestion.iconWrapper}>
            <Icon icon={'print-outline'} iconColor={'black'}/>
        </View>
        <View style={index.column}>
        <Header text={title} style={[header.text, header.paragraph, header.bold]} />
        <Header text={address} style={[header.text, header.paragraph, {color: '#a1a1a1'}]}/>
        </View>
        </TouchableOpacity>
        </View>
    );
    }
