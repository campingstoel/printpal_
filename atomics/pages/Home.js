import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from "../atoms/Button";
import button from '../../styles/button';
import Header from '../atoms/Header';
import header from '../../styles/header';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Header style={header.header} text={"Home"} />
        <Button icon={'add-outline'} onPress={() => navigation.navigate("About")} style={[button.thumb, button.circle]} />
    </View>
  );
}

