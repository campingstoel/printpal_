import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from 'react';
import Button from '../atoms/Button';
import button from '../../styles/button';
import Navbar from '../molecules/Navbar';
import SearchBar from '../molecules/SearchBar';
import Filters from '../organisms/Filters';


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <SearchBar />
      <Filters />
      <Button text='Map' icon='map-outline' onPress={() => navigation.navigate('Map')} style={button.circle} />
      <Navbar page='Home' />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center'
  }
});

