import { useLanguageState } from "../scripts/languagehandler";

export default function registrationQuestions() {
    const { translations } = useLanguageState();
    const registrationQuestions = [
        {
        id: 1,
        question: translations.emailQuestion,
        type: "text",
        placeholder: 'E-mail',
        dataName: 'email'
        },
        {
        id: 2,
        question: translations.fullNameQuestion,
        type: "text",
        placeholder: translations.fullName,
        dataName: 'fullName'
        },
        {
        id: 3,  
        question: translations.passwordQuestion,
        type: "password",
        placeholder: translations.password,
        dataName: 'password'
        },
        {
        id: 4,
        question: translations.confirmPasswordQuestion,
        type: "password",
        placeholder: translations.confirmPassword,
        dataName: 'confirmPassword'
        },
        
    ];
    
    return registrationQuestions;
    }
