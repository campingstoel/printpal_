import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "../atoms/Icon";
import Header from "../atoms/Header";
import header from "../../styles/header";
import searchsuggestion from "../../styles/searchsuggestion";
import index from "../../styles";
import colors from "../../styles/colors";

export default function SearchSuggestion({ style, title, onPress, address }) {
  return (
    <View style={[searchsuggestion.container, index.row]}>
      <TouchableOpacity
        style={[searchsuggestion.listItem, index.row, index.pad10, colors.bgWhite, index.fullWidth, index.br15, index.gap15]}
        onPress={onPress}
      >
        <View
          style={[
            searchsuggestion.iconWrapper,
            index.row,
            index.centered,
            index.mdImg,
            { backgroundColor: "#ededed" },
          ]}
        >
          <Icon icon={"print-outline"} iconColor={"black"} />
        </View>
        <View style={index.column}>
          <Header
            text={title}
            style={[header.text, header.paragraph, header.bold]}
          />
          <Header
            text={address}
            style={[header.text, header.paragraph, { color: "#a1a1a1" }]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
