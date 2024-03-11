import { useAnswerState } from "./answers";
import { useLocationState } from "./location";
import { createContext, useState, useContext } from "react";

const QuestionHandlerContext = createContext();

export const QuestionHandlerProvider = ({ children }) => {
  const {
    questionNumber,
    incrementQuestionNumber,
    decrementQuestionNumber,
    allAnswers,
    updateAnswer,
  } = useAnswerState();
  const [error, setError] = useState("");

  const { location, getLocation } = useLocationState();

  const nextQuestionHandler = (props) => {
    if (props.questionType == "Open") {
      if (
        answerValidationHandler(
          props.objectSubType,
          allAnswers[props.objectSubType]
        )
      ) {
        incrementQuestionNumber();
        setError("");
      }
    }
    if (props.questionType == "true/false") {
      if (!allAnswers[props.objectSubType]) {
        return;
      }
      if (props.objectSubType == "locationServices") {
        getLocation().then((location) => {
          if (location) {
            updateAnswer("locationcoords", location);
            incrementQuestionNumber();
            setError("");
          }
        });
      }
    }
    if (props.questionType == "Map") {
      if (!allAnswers[props.objectSubType]) {
        setError(props.falseAction);
      } else {
        incrementQuestionNumber();
      }
      if (props.objectSubType == "locationServices") {
        incrementQuestionNumber();
      }
    }
  };

  const answerValidationHandler = (fieldName, text) => {
    if (text !== undefined && text !== "" && text >= 3) {
      if (fieldName == "email") {
        if (text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          setError("");
          return true;
        } else {
          setError("Please enter a valid e-mail address.");
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
      value={{ error, nextQuestionHandler, answerValidationHandler }}
    >
      {children}
    </QuestionHandlerContext.Provider>
  );
};

export const useQuestionHandlerState = () => useContext(QuestionHandlerContext);
