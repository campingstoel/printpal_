import { useLanguageState } from "../scripts/languagehandler";

export default function ProfileSettings () {
    const { translations } = useLanguageState();
const profileSettingsList = [
    {
        id: 2,
        title: translations.appearance,
        dataTitle: "Appearance",
        subTitle: "Change the app theme",
        icon: 'color-palette',
        onPress: 'popup'
    },
    {
        id: 3,
        title: translations.language,
        dataTitle: "Language",
        subTitle: "Change the app language",
        icon: 'globe',
        onPress: 'popup'
    },
    {
        id: 4,
        title: translations.businessProfile,
        dataTitle: "Business Profile",
        subTitle: "Set up your business profile",
        icon: 'briefcase',
    },
    
    {
        id: 5,
        title: translations.privacy,
        dataTitle: "Privacy",
        subTitle: "Manage your privacy settings",
        icon: 'lock-closed',
    },
    {
        id: 6,
        title: translations.contactUs,
        dataTitle: "Contact Us",
        subTitle: "Get in touch with us",
        icon: 'mail',
    },
    {
        id: 7,
        title: translations.aboutUs,
        dataTitle: "About Us",
        subTitle: "Learn more about us",
        icon: 'information-circle',

    },

    {
        id: 8,
        title: translations.logOut,
        subTitle: "Log out of your account",
        icon: 'log-out',
    },


    
];

return profileSettingsList;

}
