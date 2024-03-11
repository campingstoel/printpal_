import { View, ScrollView } from "react-native";
import searchsuggestion from "../../styles/searchsuggestion";
import SearchSuggestion from "../molecules/SearchSuggestion";

export default function SearchSuggestions({ data, onPress }) {
  return (
    <View>
        <SearchSuggestion title="Printshop Rokkeveen" address="straat 1234"  onPress={onPress} />
        <SearchSuggestion title="Printshop Zoetermeer" address="straat 1234"  onPress={onPress} />
    </View>
  );
}
