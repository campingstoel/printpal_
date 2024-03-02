import { View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import searchBar from "../../styles/searchbar";
import Icon from "../atoms/Icon";
import button from "../../styles/button";

export default function SearchBar() {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    
    return (
        <View style={searchBar.searchBar}>
        <Icon icon='search' iconColor='black' style={[button.transparent, button.small, button.icon]} />
        <TextInput
            style={{ textAlignVertical: 'center', height: 30, padding: 0, flex: 1, marginLeft: 10}}
            placeholder='What are you looking for?'
            value={search}
            onChangeText={setSearch}
        />
        <Icon icon='location-outline' iconColor='black' style={[button.transparent, button.small, button.icon]} />
        </View>
        
    );
    }
