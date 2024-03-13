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
        <Icon icon='search' iconColor='black' style={[button.transparent, button.small, button.icon]} customSize={20} />
        <TextInput
            style={{ textAlignVertical: 'center', height: 30, padding: 0, flex: 1, marginLeft: 10, fontFamily:'Poppins-Bold', color:'#575757', fontSize: 15}}
            placeholder='What do you need?'
            value={search}
            onChangeText={setSearch}
        />
        <Icon icon='location-outline' iconColor='black' style={[button.transparent, button.small, button.icon]} />
        </View>
        
    );
    }
