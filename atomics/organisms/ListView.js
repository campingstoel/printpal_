import ListItem from "../molecules/ListItem";
import listItem from "../../styles/listItem";
import { View, ScrollView } from "react-native";
import Header from "../atoms/Header";

export default function ListView({ data, onPress }) {
  return (

    <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem title="Printshop Zoetermeer" city="Zoetermeer" availability="Mon, Tue, Wed, Thu, Fri" onPress={onPress} />
        <ListItem title="Printshop Zoetermeer" city="Zoetermeer" availability="Mon, Tue, Wed, Thu, Fri" onPress={onPress} />
    </ScrollView>
  );
}
