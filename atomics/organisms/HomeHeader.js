import { View, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import homeheader from "../../styles/homeheader";
import index from "../../styles";

export default function HomeHeader({username, profileImage}) {
    
    return (
        <View style={[homeheader.wrapper, index.row]}>
            <Image source={profileImage? profileImage : {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'}} style={homeheader.image}/>
            <Header text={`Welcome back,\n${username}`} style={[header.tiny]}/>
        </View>
        
    );  
    }
