import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, geoFirestore } from '../firebase';
import db from '../firebase';
import { formValidator } from './formValidator';

const RegistrationContext = createContext();


export const RegistrationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [registrationStep, setRegistrationStep] = useState(1);
    const [allAnswers, setAllAnswers] = useState({});
    console.log(allAnswers);



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }
    , []);

    const handleNextStep = async (questionType, direction, questionNumber, input) => {
        if(questionNumber !== 1 && direction === 'decrement') {
            setError('');
            setRegistrationStep(registrationStep - 1);
        }

        if(direction === 'increment') {
        if(questionType === 'email') {
            const validEmail = formValidator('email', input);
            if(validEmail) {
                input = input.trim();
                const existentEmail = await checkEmail(input);
                if(existentEmail) {
                    setError('E-mail already exists');
                } else {
                    setError('');
                    setRegistrationStep(registrationStep + 1);
                    setAllAnswers({ ...allAnswers, email: input });
                }


            } else {
                setError('Please enter a valid e-mail address');
            }
        }
        if(questionType === 'fullName') {
            const validName = formValidator('fullName', input);
            if(validName) {
                //remove spaces at the end of the string
                input = input.trim();

                setError('');
                setRegistrationStep(registrationStep + 1);
                setAllAnswers({ ...allAnswers, fullName: input });
            } else {
                setError('Please enter a valid name');
            }
        }
        if(questionType === 'password') {
            const validPassword = formValidator('password', input);
            if(validPassword) {
                setError('');
                setRegistrationStep(registrationStep + 1);
                setAllAnswers({ ...allAnswers, password: input });
            } else {
                setError('Password must be at least 6 characters long and contain at least one letter, one number and one special character');
            }
        }
        if(questionType === 'confirmPassword') {
            if(input === allAnswers.password) {
                setError('');
                //register user
                try {
                    await auth.createUserWithEmailAndPassword(allAnswers.email, allAnswers.password);
                    const user = auth.currentUser;
                    await user.updateProfile({
                        displayName: allAnswers.fullName
                    });
                    setError('');
                    return true;
                } catch (e) {
                    setError(e);
                }

            } else {
                setError('Passwords do not match');
            }
        }


        
        }
        


    }


    const checkEmail = async (email) => {
        try {
            const emailAuth = await auth.fetchSignInMethodsForEmail(email);
            if (emailAuth.length > 0) {
                return true;            
            } else {
                return false;
            }
        } catch (e) {
            console.log(e);
        }
 

    }

    return (
        <RegistrationContext.Provider value={{ user, error, loading, registrationStep, setRegistrationStep, handleNextStep, checkEmail }}>
            {children}
        </RegistrationContext.Provider>
    );


}

export const useRegistrationState = () => useContext(RegistrationContext);
