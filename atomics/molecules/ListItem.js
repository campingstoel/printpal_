import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import listItem from "../../styles/listItem";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";


export default function ListItem({ style, title, onPress, chat, city, availability }) {
    return (
        <View style={listItem.wrapper}>
        <TouchableOpacity style={[listItem.listItem, style]} onPress={onPress}>
        <Header text={title} style={[header.text, header.tiny, header.bold]} />
        <Header text={city} style={[header.text, header.paragraph]}/>
        <Header text={"Available on: " + availability} style={[header.text, header.paragraph]}/>
        </TouchableOpacity>
        <TouchableOpacity style={[listItem.contactButton, style]} onPress={onPress}>
            {chat ? 
            <Icon icon='chatbubble-outline' iconColor={'black'} customSize={25} />
            :
            <Icon icon='mail-outline' iconColor={'black'} customSize={25} />
            }
        </TouchableOpacity>
        </View>
    );
    }
