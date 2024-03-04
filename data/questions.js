export const questions = [
    {
      id: 1,
      question: "Welcome to PrintPal! Tell us your name.",
      questionType: 'Open',
      placeholder: 'Your name',
    },
    {
        id: 2,
        question: "What will be your business name?",
        questionType: 'Open',
        placeholder: 'Business name',
    },
    {
        id: 3,
        question: "What will be your contact e-mail?",
        questionType: 'Open',
        placeholder: 'E-mail',
    },
    {
        id: 4,
        question: 'What is your business address?',
        questionType: 'address'
        
    },
    {
        id: 5,
        question: 'Is this address correct?',
        questionType: 'map'

    },
    {
        id: 6,
        question: 'What printing services do you offer?',
        questionType: 'multiple',
        answers: [
            'A4', 'A3', 'Color', 'B&W', 'Lamination', 'Poster'
        ]
    },
    {
        id: 7,
        question: 'What will be your availability?',
        questionType: 'multiple',
        answers: [
            'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
        ]
    },
    {
        id: 8,
        question: 'Do you allow in-app messaging?',
        questionType: 'true/false'
    },
    {
        id: 9,
        question: 'We will handle your request as soon as possible. Untill then, you will be able to access customer app features.',
        questionType: 'confirm'
    }
]
