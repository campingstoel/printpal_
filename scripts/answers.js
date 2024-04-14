// questionContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import QuestionsList from '../data/questions';
import { createPrintShop } from '../firebase/printshops';
import { AuthStore } from '../firebase/store';

const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    const questions = QuestionsList();
    const [finished, setFinished] = useState(false);
    const { user } = AuthStore.useState();
    const [progressText, setProgressText] = useState('Lets begin...')
    const progressMessages = [
        { threshold: 0, message: 'Lets begin...' },
        { threshold: 0.2, message: 'On our way!' },
        { threshold: 0.3, message: 'We are getting there' },
        { threshold: 0.5, message: 'Halfway' },
        { threshold: 0.8, message: 'Almost there!' },
        { threshold: 1, message: 'Done!' },
    ];
    
    const [allAnswers, setAllAnswers] = useState({}); 

    const updateAnswer = (objectSubType, answerData) => {
      setAllAnswers((prevAnswers) => ({
        ...prevAnswers,
        [objectSubType]: answerData,
      }));
    };
    //if the last question is answered add the printshop to the database
    useEffect(() => {
        if(finished) {
            createPrintShop(user, allAnswers);
            AuthStore.update((s) => {
                s.completedBusinessProfile = true;
            }
            );
        }
    }, [finished]);

    const incrementQuestionNumber = () => {
        if(questionNumber === questions.length) setFinished(true);
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
        <AnswerContext.Provider value={{ questionNumber, incrementQuestionNumber, decrementQuestionNumber, progressText, allAnswers, updateAnswer, finished, setFinished }}>
            {children}
        </AnswerContext.Provider>
    );
};

export const useAnswerState = () => useContext(AnswerContext);