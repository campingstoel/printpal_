import { useLanguageState } from "../scripts/languagehandler";

export default function HeaderNames() {
  const { translations } = useLanguageState();

  const headerNames = [
    {
      id: 1,
      text: translations.printing,
      icon: "print-outline",
      onPress: "Printshops",
    },
    {
      id: 2,
      text: translations.binding,
      icon: "book-outline",
      onPress: "Printshops",
      filter: "Binding",
    },
    {
      id: 3,
      text: translations.lamination,
      icon: "layers-outline",
      onPress: "Printshops",
      filter: "Lamination",
    },
    {
      id: 4,
      text: translations.payments,
      icon: "card-outline",
      onPress: "Payments",
    },
  ];

  return headerNames;
}
