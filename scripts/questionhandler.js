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

  const { location, getLocation } = useLocationState();

  const nextQuestionHandler = (props) => {
    if (props.questionType == "Open") {
      if (
        answerValidationHandler(
          props.objectSubType,
          allAnswers[props.objectSubType],
          props.falseAction
        )
      ) {
        incrementQuestionNumber();
        setError("");
      }
    }
    if (props.questionType == "true/false") {
      console.log(props.objectSubType);
      if (props.objectSubType == "locationServices") {
        if (!allAnswers[props.objectSubType]) {
          setError(props.falseAction);
          return;
        } else {
          getLocation().then((location) => {
            if (location) {
              updateAnswer("locationcoords", location);
              incrementQuestionNumber();
              setError("");
            }
          });
        }
      } else {
        incrementQuestionNumber();
      }
    }
    if (props.questionType == "Map") {
      if (!allAnswers[props.objectSubType]) {
        setError(props.falseAction);
      } else {
        setError("");
        incrementQuestionNumber();
      }
    }
    if (props.questionType == "Multiple") {
      if (allAnswers[props.objectSubType].length > 0) {
        console.log(allAnswers[props.objectSubType]);
        incrementQuestionNumber();
      } else {
        setError(props.falseAction);
      }
    }
    if (props.questionType == "Confirm") {
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
      value={{ error, nextQuestionHandler, answerValidationHandler }}
    >
      {children}
    </QuestionHandlerContext.Provider>
  );
};

export const useQuestionHandlerState = () => useContext(QuestionHandlerContext);
