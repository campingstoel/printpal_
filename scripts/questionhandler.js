import { useAnswerState } from "./answers";
import { useLocationState } from "./location";
import { createContext, useState, useContext } from "react";

const QuestionHandlerContext = createContext();

export const QuestionHandlerProvider = ({ children }) => {
  const {
    incrementQuestionNumber,
    allAnswers,
    updateAnswer,
    finished,
    setFinished,
  } = useAnswerState();
  const [error, setError] = useState("");

  const [questionsShown, setQuestionsShown] = useState(false);

  const { location, getLocation } = useLocationState();

  const changeQuestionShown = () => {
    setQuestionsShown(!questionsShown);
  };


  const nextQuestionHandler = (props) => {
    if (props.questionType === "Open" &&
        !answerValidationHandler(props.objectSubType, allAnswers[props.objectSubType], props.falseAction)
    ) {
        return;  
    } 

    if (props.questionType === "true/false" && props.objectSubType === "locationServices") {
        if (allAnswers[props.objectSubType]) { 
            getLocation().then((location) => {
                if (location) {
                    updateAnswer("locationcoords", location);
                    incrementQuestionNumber();
                    setError("");
                }
            });
        } else {
            setError(props.falseAction);
        }
        return; 
    }

    if (!allAnswers[props.objectSubType] && props.questionType !== "Confirm") {
        setError(props.falseAction);
        return; 
    }

    setError("");
    incrementQuestionNumber();

    if (props.questionType === "Confirm") {
        setFinished(true);
    }
};

  const answerValidationHandler = (fieldName, text, falseAction) => {
    if (text !== undefined && text !== "" && text.length >= 3) {
      if (fieldName == "email") {
        if (text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          setError("");
          return true;
        } else {
          setError(falseAction);
        }
      }
      if (fieldName == "name" || fieldName == "businessName") {
        if (text.match(/^[a-zA-Z]+$/) && text.length <= 20) {
          setError("");
          return true;
        } else {
          setError("Please enter a valid name below 20 characters.");
        }
      }
    } else {
      setError("This field is required.");
    }
  };

  return (
    <QuestionHandlerContext.Provider
      value={{ error, nextQuestionHandler, answerValidationHandler, questionsShown, changeQuestionShown}}
    >
      {children}
    </QuestionHandlerContext.Provider>
  );
};

export const useQuestionHandlerState = () => useContext(QuestionHandlerContext);
