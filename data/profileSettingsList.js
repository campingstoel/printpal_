import { useLanguageState } from "../scripts/languagehandler";
import * as WebBrowser from 'expo-web-browser'


export default function ProfileSettings () {
    const { translations } = useLanguageState();
const profileSettingsList = [
    {
        id: 2,
        title: translations.profile.appearance,
        dataTitle: "Appearance",
        subTitle: translations.profile.appearanceDescription,
        icon: 'color-palette',
        onPress: 'popup'
    },
    {
        id: 3,
        title: translations.profile.language,
        dataTitle: "Language",
        subTitle: translations.profile.languageDescription,
        icon: 'globe',
        onPress: 'popup'
    },
    {
        id: 4,
        title: translations.profile.businessProfile,
        dataTitle: "Business Profile",
        subTitle: translations.profile.businessProfileDescription,
        icon: 'briefcase',
    },
    
    {
        id: 5,
        title: translations.profile.privacy,
        dataTitle: "Privacy",
        subTitle: translations.profile.privacyDescription,
        icon: 'lock-closed',
    },
    {
        id: 6,
        title: translations.profile.contactUs,
        dataTitle: "Contact Us",
        subTitle: translations.profile.contactUsDescription,
        icon: 'mail',
    },
    {
        id: 7,
        title: translations.profile.aboutUs,
        dataTitle: "About Us",
        subTitle: translations.profile.aboutUsDescription,
        icon: 'information-circle',
        onPress: () => WebBrowser.openBrowserAsync('https://www.printpal.app/about-us')
        

    },

    {
        id: 8,
        title: translations.profile.logOut,
        dataTitle: "Log Out",
        subTitle: translations.profile.logOutDescription,
        icon: 'log-out',
        onPress: 'logout'
    },


    
];

return profileSettingsList;

}
