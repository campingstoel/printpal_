import ListItem from "../molecules/ListItem";
import listItem from "../../styles/listItem";
import { View, ScrollView } from "react-native";
import Header from "../atoms/Header";

export default function ListView({ data, onPress }) {
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem title="Printshop Zoetermeer" rating={'5'} distance={'450'} services={'A4, A3, Color, B&W'} onPress={onPress} />
        <ListItem title="Printshop Zoetermeer" rating={'3'} distance={'450'} services={'A4, A3, Color, B&W'} onPress={onPress} />
    </ScrollView>
  );
}
