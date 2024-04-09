import { ScrollView, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import index from "../../styles/index";
import { Dimensions } from "react-native";
import { useLanguageState } from "../../scripts/languagehandler";
import darkmodeColors from "../../styles/darkmodecolors";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import { useRoute } from "@react-navigation/native";
import Form from "../organisms/Form";

const { height } = Dimensions.get("window");

export default function Login({ params }) {
  const route = useRoute();
  const email = route.params.email;
  const navigation = useNavigation();
  const { theme, changeTheme } = useThemeState();
  const themeColors = theme === "Light mode" ? colors : darkmodeColors;
  const { translations } = useLanguageState();

  return (
    <View
      style={[
        index.wrapper,
        index.alignCenter,
        themeColors.bgWhite,
        { height: height },
      ]}
    >
        <StatusBar backgroundColor={`${themeColors.bgWhite.backgroundColor}`} />
        <Form themeColors={themeColors} page='Login' translations={translations}/>
    </View>
  );
}
