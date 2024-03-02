import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import header from "../../styles/header";
import Header from "../atoms/Header";
import homeheader from "../../styles/homeheader";
import index from "../../styles";

export default function HomeHeader({username, active}) {
    
    return (
        <View style={[homeheader.wrapper, index.row]}>
            <TouchableOpacity style={[homeheader.button, index.row, active== 'Printing' ? homeheader.active : null ]}>
            <Image source={require('../../images/computer.png')} style={homeheader.image}/>
            <Header text="Printing" style={[header.tiny, {color:'#a1a1a1'}, header.bold, active=='Printing' ? header.black : null]}/>
            </TouchableOpacity>
            <TouchableOpacity style={[homeheader.button, index.row]}>
            <Image source={require('../../images/male-customer.png')} style={homeheader.image}/>
            <Header text="Service" style={[header.tiny, {color:'#a1a1a1'}, header.bold, active=='Help' ? header.black : null]}/>
            </TouchableOpacity>
        </View>
        
    );  
    }
