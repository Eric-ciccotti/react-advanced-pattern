import React, { useState } from 'react'
import { LetterContextProvider } from './useLetterContext';
import { Counter } from './components/Counter';
import { InputField } from './components/InputField';
import { Label } from './components/Label';

const LetterCounter = ({children}) => {
    const [wordsLength, setWordsLenght] = useState(0)
    const [enteredWord, setEnteredWord] = useState(null);


    const setWord = (e) => {
        const inputWithoutSpace = e.target.value.replace(/\s/g, '');
        setWordsLenght(inputWithoutSpace.length);
        setEnteredWord(inputWithoutSpace);
        console.log(inputWithoutSpace.length);
    }

  return (
    <LetterContextProvider value={{setWord, wordsLength, enteredWord}}>
        {children}
    </LetterContextProvider>
    )
}

LetterCounter.Counter = Counter;
LetterCounter.InputField = InputField;
LetterCounter.Label = Label;

export { LetterCounter };