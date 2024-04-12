import { LocationProvider } from "./location";
import { AnswerProvider } from "./answers";
import { QuestionHandlerProvider } from "./questionhandler";
import { LanguageProvider } from "./languagehandler";
import { ThemeProvider } from "./themehandler";
import { PopupProvider } from "./popuphandler";
import { AccountProvider } from "./accounthandler";
import { RegistrationProvider } from "./registrationhandler";

import { createContext, useState, useContext } from "react";

const ContextHandler = createContext();

export const ContextHandlerProvider = ({ children }) => {
  return (
    <AccountProvider>
      <RegistrationProvider>
        <LanguageProvider>
          <ThemeProvider>
            <LocationProvider>
              <AnswerProvider>
                <PopupProvider>
                  <QuestionHandlerProvider>{children}</QuestionHandlerProvider>
                </PopupProvider>
              </AnswerProvider>
            </LocationProvider>
          </ThemeProvider>
        </LanguageProvider>
      </RegistrationProvider>
    </AccountProvider>
  );
};

export const useContextHandler = () => useContext(ContextHandler);
