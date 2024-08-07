import React from "react";
import { TouchableOpacity, View } from "react-native";
import FilterNames from "../../data/filterNames";
import filterblock from "../../styles/filterblock";
import FilterBlock from "../molecules/FilterBlock";
import index from "../../styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../atoms/Header";
import header from "../../styles/header";
import { imageStore } from "../../auth/store";
import ShimmerPlaceHolder from "../atoms/Shimmer";

export default function Filters({ page, styles, themeColors, translations }) {
  const filterNames = FilterNames();
  const filterProps =
    page == "Home" ? filterNames.slice(0, 5) : filterNames.slice(0, 3);
  const navigation = useNavigation();
  const {images, loadedImages} = imageStore.useState();

  return (
    <View style={[index.padHor10, styles]}>
      {page == "Home" ? (
        <View style={[index.spaceBetween, index.row, index.flexWrap, index.fullWidth, index.mt20]}>
          {filterProps.map((item) => (
            loadedImages ?
            <FilterBlock
              key={item.id}
              text={item.text}
              important={page == "Search" ? item.important : null}
              image={item.image}
              styles={[index.m5,{width: '30%', height: 120, aspectRatio: 167/145}]}
              themeColors={themeColors}
              onPress={item.onPress}
            />
            : <ShimmerPlaceHolder key={item.id} style={[index.m5, index.br10, themeColors.bgGrey, {width: '30%', height: 120, aspectRatio: 167/145}]}  />
          ))}



{loadedImages ?  
          <FilterBlock
            key="View more"
            text={"View more"}
            image={{uri: images.find((image) => image.includes("menu")) }}
            onPress={() => navigation.navigate("Search")}
            themeColors={themeColors}
              styles={[index.m5, themeColors.bgGrey, {width: '30%', height: 120, aspectRatio: 167/145}]}

          />
          : <ShimmerPlaceHolder style={[index.m5, index.br10, themeColors.bgGrey, {width: '30%', height: 120, aspectRatio: 167/145}]}  />
        }
        </View>
      ) : 

      <View style={[index.spaceBetween, index.row, index.flexWrap, index.fullWidth]}>
        <Header text={translations.search.suggested} style={[index.fullWidth, header.tiny, header.bold, index.mb20, index.mt20, themeColors.black]} />
        {filterProps.map((item) => (
          loadedImages ?
          <FilterBlock
            key={item.id}
            text={item.text}
            image={item.image}
            onPress={item.onPress}
            themeColors={themeColors}
            styles={{width: '31%', height: 120, aspectRatio: 167/145}}
          />
          : <ShimmerPlaceHolder key={item.id} style={[index.m5, index.br10, themeColors.bgGrey, {width: '30%', height: 120, aspectRatio: 167/145}]}  />
        ))}
      </View>
        
      }

    </View>
  );
}
