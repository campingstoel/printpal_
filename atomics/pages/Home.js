import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../atoms/Button";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
        <Button text="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
