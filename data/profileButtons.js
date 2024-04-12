import { useLanguageState } from "../scripts/languagehandler";

export default function ProfileButtons() {
    const { translations } = useLanguageState();   
    const profileButtons = [
    {
        id: 2,
        text: translations.profile.help,
        dataTitle: "Help",
        icon: 'help-buoy',
    },
    {
        id: 3,
        text: translations.profile.wallet,
        dataTitle: "Wallet",
        icon: 'card',

        
    },
    {
        id: 4,
        text: translations.profile.activity,
        dataTitle: "Activity",
        icon: 'time',

    },
]
return profileButtons;


};
