
import { useLanguageState } from "../scripts/languagehandler";
import { imageStore } from "../firebase/store";

export default function QuestionsList() {
  const {images} = imageStore.useState();
  const { translations } = useLanguageState();


const questions = [
  {
    id: 1,
    title: translations.questionnaire.welcomeTitle,
    question:
      translations.questionnaire.welcomeDescription,
    questionType: "Open",
    placeholder: translations.questionnaire.nameLabel,
    objectSubType: "name",
    maxLength: 20,
    falseAction: "Please enter a valid name.",
    image: {uri:
      images.find((image) => image.includes("name"))
    },
  },
  {
    id: 2,
    title: translations.questionnaire.businessNameTitle,
    question:
      translations.questionnaire.businessNameDescription,
    questionType: "Open",
    placeholder: translations.questionnaire.businessNameLabel,
    objectSubType: "businessName",
    maxLength: 20,
    falseAction: translations.questionnaire.businessNameFalseAction,
    image : {
      uri: images.find((image) => image.includes("business")),
    },
  },
  {
    id: 3,
    title: translations.questionnaire.contactEmailTitle,
    question: translations.questionnaire.contactEmailDescription,
    questionType: "Open",
    placeholder: translations.questionnaire.contactEmailLabel,
    objectSubType: "email",
    maxLength: 64,
    falseAction: translations.questionnaire.contactEmailFalseAction,
    image : {
      uri: images.find((image) => image.includes("email")),
    },
  },
  {
    id: 4,
    title: translations.questionnaire.locationServicesTitle,
    question:
      translations.questionnaire.locationServicesDescription,
    objectSubType: "locationServices",
    questionType: "true/false",
    falseAction:
      translations.questionnaire.locationServicesFalseAction,
      image : {
        uri: images.find((image) => image.includes("location")),
      },
  },
  {
    id: 5,
    title: translations.questionnaire.locationCorrectnessTitle,
    question: translations.questionnaire.locationCorrectnessDescription,
    questionType: "Map",
    objectSubType: "locationCorrectness",
    falseAction:
      translations.questionnaire.locationCorrectnessFalseAction,
  },
  {
    id: 6,
    title: translations.questionnaire.locationVisibilityTitle,
    question: translations.questionnaire.locationVisibilityDescription,
    questionType: "true/false",
    objectSubType: "locationVisibility",
    image : {
      uri: images.find((image) => image.includes("location")),
    },
  },
  {
    id: 7,
    title: translations.questionnaire.printingServicesTitle,
    question: translations.questionnaire.printingServicesDescription,
    questionType: "Multiple",
    answers: [translations.questionnaire.printingServicesAnswers.a4, translations.questionnaire.printingServicesAnswers.a3, translations.questionnaire.printingServicesAnswers.color, translations.questionnaire.printingServicesAnswers.blackAndWhite, translations.questionnaire.printingServicesAnswers.poster,translations.questionnaire.printingServicesAnswers.lamination],
    objectSubType: "services",
    falseAction: translations.questionnaire.printingServicesFalseAction,
    image : {
      uri: images.find((image) => image.includes("services")),
    },
  },
  {
    id: 8,
    title: translations.questionnaire.availabilityTitle,
    question: translations.questionnaire.availabilityDescription,
    questionType: "Multiple",
    answers: [
      translations.questionnaire.availabilityAnswers.monday,
      translations.questionnaire.availabilityAnswers.tuesday,
      translations.questionnaire.availabilityAnswers.wednesday,
      translations.questionnaire.availabilityAnswers.thursday,
      translations.questionnaire.availabilityAnswers.friday,
      translations.questionnaire.availabilityAnswers.saturday,
      translations.questionnaire.availabilityAnswers.sunday,

    ],
    objectSubType: "availability",
    falseAction: translations.questionnaire.availabilityFalseAction,
    image : {
      uri: images.find((image) => image.includes("business")),
    },
  },
  {
    id: 9,
    title: translations.questionnaire.inAppMessagingTitle,
    question: translations.questionnaire.inAppMessagingDescription,
    questionType: "true/false",
    objectSubType: "Messaging",
    falseAction: "",
    image : {
      uri: images.find((image) => image.includes("messaging")),
    },
  },
  {
    id: 10,
    title: "Confirm",
    question:
    translations.questionnaire.confirmDescription,
    questionType: "Confirm",
    image : {
      uri: images.find((image) => image.includes("name")),
    },
  },
]

return questions;
}

