// questionContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { questions } from '../data/questions';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [progressText, setProgressText] = useState('Lets begin...')
    const progressMessages = [
        { threshold: 0, message: 'Lets begin...' },
        { threshold: 0.2, message: 'On our way!' },
        { threshold: 0.3, message: 'We are getting there' },
        { threshold: 0.5, message: 'Halfway' },
        { threshold: 0.8, message: 'Almost there!' },
        { threshold: 1, message: 'Done!' },
    ];
    
    const [allAnswers, setAllAnswers] = useState({}); // State for all answers

    const updateAnswer = (objectSubType, answerData) => {
      setAllAnswers((prevAnswers) => ({
        ...prevAnswers,
        [objectSubType]: answerData,
      }));
      console.log(allAnswers)
    };

    const incrementQuestionNumber = () => {
        setQuestionNumber(prevNumber => prevNumber + 1);
    };

    const decrementQuestionNumber = () => {
        setQuestionNumber(prevNumber => Math.max(1, prevNumber - 1));
    };



    useEffect(() => {
        const progressRatio = questionNumber / questions.length;
    

        const matchingMessage = progressMessages.find((item, index) => {
            const nextItem = progressMessages[index + 1];
            return progressRatio >= item.threshold &&
                   (!nextItem || progressRatio < nextItem.threshold);
        });
    
        if (matchingMessage) {
            setProgressText(matchingMessage.message);
        } 
    }, [questionNumber]);

    return (
        <QuestionContext.Provider value={{ questionNumber, incrementQuestionNumber, decrementQuestionNumber, progressText, allAnswers, updateAnswer }}>
            {children}
        </QuestionContext.Provider>
    );
};

export const useQuestionState = () => useContext(QuestionContext);