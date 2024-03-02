import { View, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from '../atoms/Button';
import Navbar from '../molecules/Navbar';
import SearchBar from '../molecules/SearchBar';
import Filters from '../organisms/Filters';
import index from '../../styles/index';
import button from '../../styles/button';
import ListView from '../organisms/ListView';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={index.wrapper}>
      <SearchBar />
      <View style={index.body}>
      <Filters />
      <ListView />
    </View>
    <Button text='Map' icon='map-outline' onPress={() => navigation.navigate('Map')} style={[button.circle, { position: 'absolute', bottom: '13%' }]} />
    <Navbar page='Home' />

    </View>

  );
}


