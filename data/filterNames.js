import { useLanguageState } from "../scripts/languagehandler";
import { imageStore } from "../firebase/store";
import { useNavigation } from "@react-navigation/native";
import { useSearchState } from "../scripts/searchhandler";

export default function FilterNames() {
  const { translations } = useLanguageState();
  const {images} = imageStore.useState();
  const navigation = useNavigation();
  const filterNames = [
    {
      id: 1,
      text: translations.services.a4Paper,
      icon: "document-outline",
      dataText: "A4",
      important: true,
      onPress: () => navigation.navigate("Search", { filter: "A4" }),
      image: {uri:
        images.find((image) => image.includes("document"))
      },
    },
    {
      id: 2,
      text: translations.services.a3Paper,
      icon: "newspaper-outline",
      important: false,
      dataText: "A3",
      onPress: () => navigation.navigate("Search", { filter: "A3" }),
      image: {
        uri: images.find((image) => image.includes("newspaper")),
      },
    },
    {
      id: 3,
      icon: "color-palette-outline",
      text: translations.services.color,
      important: false,
      dataText: "Color",
      onPress: () => navigation.navigate("Search", { filter: "Color" }),
      image: {
        uri: images.find((image) => image.includes("color")),
      },
    },
    {
      id: 4,
      text: translations.services.poster,
      icon: "aperture-outline",
      important: false,
      dataText: "Poster",
      onPress: () => navigation.navigate("Search", { filter: "Poster" }),
      image: {
        uri: images.find((image) => image.includes("poster")),
      },
    },
    {
      id: 5,
      icon: "contrast-outline",
      text: translations.services.blackAndWhite,
      important: false,
      dataText: "B&W",
      onPress: () => navigation.navigate("Search", { filter: "B&W" }),
      image: {
        uri: images.find((image) => image.includes("varnish")),
      },
    },
    {
      id: 6,
      icon: "layers-outline",
      text: translations.services.lamination,
      important: false,
      dataText: "Lamination",
      onPress: () => navigation.navigate("Search", { filter: "Lamination" }),
      image: {
        uri: images.find((image) => image.includes("lamination")),
      
      },
    },
    {
      id: 7,
      icon: "book-outline",
      text: translations.services.binding,
      important: false,
      dataText: "Binding",
      onPress: () => navigation.navigate("Search", { filter: "Binding" }),
      image: {
        uri: images.find((image) => image.includes("bookmark")),
      },
    },
  ];

  return filterNames;
}
