import {
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
  Animated,
} from "react-native";
import index from "../../styles";
import colors from "../../styles/colors";
import { useWindowDimensions } from "react-native";
import { useEffect, useRef } from "react";
import splashscreen from "../../styles/splashscreen";
import Header from "../atoms/Header";
import header from "../../styles/header";


export default function SplashScreen() {
  const dotBounceValues = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;
  const height = useWindowDimensions();


  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    const animations = dotBounceValues.map((value, index) =>
      Animated.sequence([
        Animated.timing(value, {
          toValue: -30,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.stagger(100, animations).start(() => {
      animate();
    });
  };

  const animatedDotStyles = dotBounceValues.map((bounceValue) => ({
    transform: [{ translateY: bounceValue }],
  }));

  return (
    <View style={[colors.bgBlack, index.fullFlex, index.centered, { height: height }]}>
      <Image
        source={require("../../assets/iconWhite.png")}
        style={{ width: 150, height: 150, resizeMode: "contain", bottom:80}}
      />
      <View style={[index.row]}>
        <View style={[splashscreen.dot]}>
          <Animated.View style={[splashscreen.dotInner, animatedDotStyles[0]]} />
        </View>
        <View style={[splashscreen.dot]}>
          <Animated.View style={[splashscreen.dotInner, animatedDotStyles[1]]} />
        </View>
        <View style={[splashscreen.dot]}>
          <Animated.View style={[splashscreen.dotInner, animatedDotStyles[2]]} />
        </View>
        <View style={[splashscreen.dot]}>
          <Animated.View style={[splashscreen.dotInner, animatedDotStyles[3]]} />
        </View>
      </View>
    </View>
  );
}
