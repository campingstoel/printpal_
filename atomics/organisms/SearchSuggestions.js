import { View, ScrollView } from "react-native";
import SearchSuggestion from "../molecules/SearchSuggestion";
import index from "../../styles";
import colors from "../../styles/colors";

export default function SearchSuggestions({ data, onPress }) {
  return (
    <View style={[index.fullWidth, colors.bgWhite, index.spaceBetween]}>
        <SearchSuggestion title="Printshop Rokkeveen" address="straat 1234"  onPress={onPress} />
        <SearchSuggestion title="Printshop Zoetermeer" address="straat 1234"  onPress={onPress} />
    </View>
  );
}
