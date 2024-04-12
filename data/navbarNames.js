import { useLanguageState } from "../scripts/languagehandler";
export default function NavbarNames() {
  const { translations } = useLanguageState();

  const navbarNames = [
    {
      id: 1,
      icon: "home",
      text: translations.navigation.home,
      dataText: "Home",
    },
    {
      id: 2,
      icon: "search",
      text: translations.navigation.search,
      dataText: "Search",
    },
    {
      id: 3,
      icon: "chatbubble",
      text: translations.navigation.chats,
      dataText: "Chats",
    },
    {
      id: 4,
      icon: "person",
      text: translations.navigation.profile,
      dataText: "Profile",
    },
  ];

  return navbarNames;
}
