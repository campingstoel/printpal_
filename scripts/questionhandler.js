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
      const [error, setError] = useState('');

    const { location, getLocation } = useLocationState();

    const nextQuestionHandler = (props) => {

    if (props.questionType == "Open") {
        if (
          allAnswers[props.objectSubType] == "" ||
          allAnswers[props.objectSubType] == null
        ) {
          return;
        }
        console.log("incrementing question number");
        incrementQuestionNumber();
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
              }
          }); 
      }
     
    };
    if(props.questionType == "Map") {
      if (!allAnswers[props.objectSubType]) {
        setError(props.falseAction);

      }
      else {
        incrementQuestionNumber();
      }
      if (props.objectSubType == "locationServices") {
        incrementQuestionNumber();
      }       
    }
}
    return (
        <QuestionHandlerContext.Provider value={{ error, nextQuestionHandler}}>
            {children}
        </QuestionHandlerContext.Provider>
    );
}

export const useQuestionHandlerState = () => useContext(QuestionHandlerContext);