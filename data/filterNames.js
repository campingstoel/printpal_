import { useLanguageState } from "../scripts/languagehandler";
import { imageStore } from "../auth/store";

export default function FilterNames() {
  const { translations } = useLanguageState();
  const {images} = imageStore.useState();
  const filterNames = [
    {
      id: 1,
      text: translations.services.a4Paper,
      icon: "document-outline",
      important: true,
      image: {uri:
        images.find((image) => image.includes("document"))
      },
    },
    {
      id: 2,
      text: translations.services.a3Paper,
      icon: "newspaper-outline",
      important: false,
      image: {
        uri: images.find((image) => image.includes("newspaper")),
      },
    },
    {
      id: 3,
      icon: "color-palette-outline",
      text: translations.services.color,
      important: false,
      image: {
        uri: images.find((image) => image.includes("color")),
      },
    },
    {
      id: 4,
      text: translations.services.poster,
      icon: "aperture-outline",
      important: false,
      image: {
        uri: images.find((image) => image.includes("poster")),
      },
    },
    {
      id: 5,
      icon: "contrast-outline",
      text: translations.services.blackAndWhite,
      important: false,
      image: {
        uri: images.find((image) => image.includes("varnish")),
      },
    },
    {
      id: 6,
      icon: "layers-outline",
      text: translations.services.lamination,
      important: false,
      image: {
        uri: images.find((image) => image.includes("lamination")),
      
      },
    },
    {
      id: 7,
      icon: "book-outline",
      text: translations.services.binding,
      important: false,
      image: {
        uri: images.find((image) => image.includes("bookmark")),
      },
    },
  ];

  return filterNames;
}
