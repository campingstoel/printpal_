import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stories from "../../styles/stories";
import { storiesData } from "../../data/stories";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";
import { ScrollView } from "react-native-gesture-handler";
import index from "../../styles";


export default function Stories({}) {
  const navigation = useNavigation();

  return (
    <View style={stories.wrapper}>
      <Header style={[header.bold, header.tiny]} text={"Discover PrintPal"} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {storiesData.map((story) => (
          <View key={story.id} style={stories.story}>
            <Image source={story.image} style={stories.image} />
            <TouchableOpacity
              style={stories.button}
              onPress={() => {
                navigation.navigate(story.onPress);
              }}
            >
              <Icon
                icon={"arrow-forward"}
                customSize={30}
                iconColor={"black"}
              />
            </TouchableOpacity>
            <Text style={stories.text}>{story.title}</Text>
            <Text style={stories.subText}>
              {story.description.length > 24
                ? story.description.substring(0, 24) + "..."
                : story.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
