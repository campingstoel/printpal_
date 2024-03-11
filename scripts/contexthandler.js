import { LocationProvider } from "./location";
import { AnswerProvider } from "./answers";
import { QuestionHandlerProvider } from "./questionhandler";
import { createContext, useState, useContext } from "react";

const ContextHandler = createContext();

export const ContextHandlerProvider = ({ children }) => {
  return (
    <LocationProvider>
      <AnswerProvider>
        <QuestionHandlerProvider>{children}</QuestionHandlerProvider>
      </AnswerProvider>
    </LocationProvider>
  );
};

export const useContextHandler = () => useContext(ContextHandler);
