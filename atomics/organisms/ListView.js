import ListItem from "../molecules/ListItem";
import listItem from "../../styles/listItem";
import { View, ScrollView } from "react-native";
import Header from "../atoms/Header";
import { PrintShopStore } from "../../firebase/printshops";

export default function ListView({ data, onPress, themeColors }) {
  const {printShops, loadedPrintShops} = PrintShopStore.useState();

  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      {printShops.length === 0 && <Header text="No printshops found. Try refreshing." style={[listItem.title, listItem.bold, listItem.tiny, themeColors.black]} />}
      {printShops.map((printShop) => (
        <ListItem key={printShop.uid} title={printShop.name} distance={printShop.distance} rating={printShop.rating} services={
          printShop.services.map((service) => service).join(", ")
        } onPress={onPress} themeColors={themeColors} />
      ))}
    </ScrollView>
  );
}
