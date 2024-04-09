import { useLanguageState } from "../scripts/languagehandler";

export default function FilterNames() {
  const { translations } = useLanguageState();
  const filterNames = [
    {
      id: 1,
      text: translations.a4Paper,
      icon: "document-outline",
      important: true,
      image: require("../images/document.png"),
    },
    {
      id: 2,
      text: translations.a3Paper,
      icon: "newspaper-outline",
      important: false,
      image: require("../images/newspaper.png"),
    },
    {
      id: 3,
      icon: "color-palette-outline",
      text: translations.color,
      important: false,
      image: require("../images/poster.png"),
    },
    {
      id: 4,
      text: translations.poster,
      icon: "aperture-outline",
      important: false,
      image: require("../images/poster-icon.png"),
    },
    {
      id: 5,
      icon: "contrast-outline",
      text: translations.blackAndWhite,
      important: false,
      image: require("../images/varnish.png"),
    },
    {
      id: 6,
      icon: "layers-outline",
      text: translations.lamination,
      important: false,
      image: require("../images/lamination.png"),
    },
    {
      id: 7,
      icon: "book-outline",
      text: translations.binding,
      important: false,
      image: require("../images/bookmark.png"),
    },
  ];

  return filterNames;
}
