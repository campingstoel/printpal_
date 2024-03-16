export const questions = [
    {
      id: 1,
      title: "Welcome to your PrintPal Business!",
      question: "Tell us your name and let's get started with your business profile.",
      questionType: 'Open',
      placeholder: 'Your name',
      objectSubType: 'name',
      maxLength: 20,
      falseAction: 'Please enter a valid name.',
      image: require('../images/name.png')
    },
    {
        id: 2,
        title: 'Business Name',
        question: "This is the name that will be shown to your customers. What will be your business name?",
        questionType: 'Open',
        placeholder: 'Business name',
        objectSubType: 'businessName',
        maxLength: 20,
        falseAction: 'Please enter a valid business name.',
        image: require('../images/business.png')

    },
    {
        id: 3,
        title: 'Contact E-mail',
        question: "We will use this e-mail to contact you. What is your e-mail?",
        questionType: 'Open',
        placeholder: 'E-mail',
        objectSubType: 'email',
        maxLength: 64,
        falseAction: 'Please enter a valid e-mail address.',
        image: require('../images/email.png')
    },
    {
        id: 4,
        title: 'Location Services',
        question: 'We use location services to make potential customers find you. Do you allow location services?',
        objectSubType: 'locationServices',
        questionType: 'true/false',
        falseAction: 'Please make sure location services are enabled. If you are still having trouble, please contact us.',
        image: require('../images/location.png')    

    },
    {
        id: 5,
        title: 'Location Correctness',
        question: 'Is this address correct? (within 100 meter radius)',
        questionType: 'Map',
        objectSubType: 'locationCorrectness',
        falseAction: 'Please make sure no VPN is active and make sure you are at the location. If you are not at the location, please close the app and try again later. If you are at the location, please make sure location services are enabled. If you are still having trouble, please contact us.',
    },
    {
        id: 6,
        title: 'Location Visibility',
        question: 'Do you want your location to appear on the map?',
        questionType: 'true/false',
        objectSubType: 'locationVisibility',
        image: require('../images/location.png'),
    },
    {
        id: 7,
        title: 'Printing Services',
        question: 'What printing services do you offer?',
        questionType: 'Multiple',
        answers: [
            'A4', 'A3', 'Color', 'B&W', 'Lamination', 'Poster'
        ],
        objectSubType: 'services',
        falseAction: 'Please select at least one service.',
        image: require('../images/services.png')
    },
    {
        id: 8,
        title: 'Availability',
        question: 'What will be your availability?',
        questionType: 'Multiple',
        answers: [
            'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
        ],
        objectSubType: 'availability',
        falseAction: 'Please select at least one day.',
        image: require('../images/business.png')
    },
    {
        id: 9,
        title: 'In-App Messaging',
        question: 'Do you allow in-app messaging?',
        questionType: 'true/false',
        objectSubType: 'Messaging',
        falseAction: '',
        image: require('../images/messaging.png')
    },
    {
        id: 10,
        title: 'Confirm',
        question: 'We will handle your request as soon as possible. Untill then, you will be able to access customer app features.',
        questionType: 'Confirm',
        image: require('../images/name.png')
    }
]
