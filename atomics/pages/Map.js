import { View } from "react-native";
import Navbar from "../molecules/Navbar";
import index from "../../styles/index";
import { Dimensions } from "react-native";
import Mapbox from "../atoms/Mapbox";
const { height } = Dimensions.get("window");
import { useLocationState } from "../../scripts/location";
import { useEffect } from "react";

export default function Map() {
    const { location, getLocation } = useLocationState();

    
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
    <Navbar page="Home" />
  </View>
    : null
);

}
