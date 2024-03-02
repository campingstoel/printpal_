import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../atoms/Button";
import Navbar from "../molecules/Navbar";
import SearchBar from "../molecules/SearchBar";
import Filters from "../organisms/Filters";
import index from "../../styles/index";
import SearchSuggestions from "../organisms/SearchSuggestions";
import HomeHeader from "../organisms/HomeHeader";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={index.wrapper}>
      <HomeHeader username={'Camryn'} />
      <SearchBar />
      <SearchSuggestions />
      <View style={index.body}>
        <Filters />
      </View>
      <Navbar page="Services" />
    </View>
  );
}
