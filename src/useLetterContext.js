import React from "react";

//creation du context
const LetterContext = React.createContext(undefined);

//creation du provider de context
const LetterContextProvider = ({children, value}) => {
    return <LetterContext.Provider value={value}>{children}</LetterContext.Provider>;
}


//creation d'un hook qui s'assure que le Context est utilisé au bon endroit
const useLetterContext = () => {
    const context = React.useContext(LetterContext);
    if (context === undefined) {
        throw new Error("useLetterContext must be used within a LetterContextProvider");
      }
      return context;
}

export { useLetterContext, LetterContextProvider };