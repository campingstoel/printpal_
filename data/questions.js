export const questions = [
    {
      id: 1,
      question: "Welcome to PrintPal! Tell us your name.",
      questionType: 'Open',
      placeholder: 'Your name',
      objectSubType: 'name',
      maxLength: 20,
      falseAction: 'Please enter a valid name.',
    },
    {
        id: 2,
        question: "What will be your business name?",
        questionType: 'Open',
        placeholder: 'Business name',
        objectSubType: 'businessName',
        maxLength: 20,
        falseAction: 'Please enter a valid business name.',
    },
    {
        id: 3,
        question: "What will be your contact e-mail?",
        questionType: 'Open',
        placeholder: 'E-mail',
        objectSubType: 'email',
        maxLength: 64,
        falseAction: 'Please enter a valid e-mail address.',
    },
    {
        id: 4,
        question: 'We use location services to make potential customers find you. Do you allow location services?',
        objectSubType: 'locationServices',
        questionType: 'true/false',
        falseAction: 'Please make sure location services are enabled. If you are still having trouble, please contact us.',

    },
    {
        id: 5,
        question: 'Is this address correct? (within 100 meter radius)',
        questionType: 'Map',
        objectSubType: 'locationCorrectness',
        falseAction: 'Please make sure no VPN is active and make sure you are at the location. If you are not at the location, please close the app and try again later. If you are at the location, please make sure location services are enabled. If you are still having trouble, please contact us.',
    },
    {
        id: 6,
        question: 'Do you want your location to appear on the map?',
        questionType: 'true/false',
        objectSubType: 'locationVisibility',
    },
    {
        id: 7,
        question: 'What printing services do you offer?',
        questionType: 'Multiple',
        answers: [
            'A4', 'A3', 'Color', 'B&W', 'Lamination', 'Poster'
        ],
        objectSubType: 'services',
        falseAction: 'Please select at least one service.',
    },
    {
        id: 8,
        question: 'What will be your availability?',
        questionType: 'Multiple',
        answers: [
            'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
        ],
        objectSubType: 'availability',
        falseAction: 'Please select at least one day.',
    },
    {
        id: 9,
        question: 'Do you allow in-app messaging?',
        questionType: 'true/false',
        objectSubType: 'Messaging',
        falseAction: '',
    },
    {
        id: 10,
        question: 'We will handle your request as soon as possible. Untill then, you will be able to access customer app features.',
        questionType: 'Confirm'
    }
]
