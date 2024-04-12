import { View, StatusBar } from "react-native";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import { Dimensions } from "react-native";
import Mapbox from "../atoms/Mapbox";
import { useLocationState } from "../../scripts/location";
import { useEffect } from "react";
import { useThemeState } from "../../scripts/themehandler";
import colors from "../../styles/colors";
import darkmodeColors from "../../styles/darkmodecolors";
const { height } = Dimensions.get("window");

export default function Map() {
    const { location, getLocation } = useLocationState();
    const {theme, changeTheme} = useThemeState();
    const themeColors = theme === 'Light mode' ? colors : darkmodeColors;

    
    useEffect(() => {
       //getlocation and add a 'then' to wait for the location to be set
        getLocation().then((loc) => {

        });

    }
    , []);



return (
    location ?
  <View style={[index.wrapper, index.alignCenter, { height: height }]}>
    <Mapbox 
location={location}
style={{ flex: 1, borderRadius: 0 }}
     />
    <Navbar page={'Home'} themeColors={themeColors} />
  </View>
    : null
);

}
