import React, { useState } from 'react';
import { LetterContextProvider } from './useLetterContext';
import { Counter } from './components/Counter';
import { InputField } from './components/InputField';
import { Label } from './components/Label';
import UseLetterCounter from './useLetterCounter';

const LetterCounter = ({ children }) => {
  const { setWord, wordsLength, enteredWord } = UseLetterCounter();

  const [max, setMax] = useState(5);

  return (
    <LetterContextProvider value={{ setWord, wordsLength, enteredWord, max }}>
      <label htmlFor="maxNumber">
        Nombre maximum du component parent qui va controler l'enfant (
        controlled component pattern)
        <input
          type="number"
          onChange={(e) => setMax(e.currentTarget.value)}
          name="maxNumber"
        />
      </label>
      {children}
    </LetterContextProvider>
  );
};

LetterCounter.Counter = Counter;
LetterCounter.InputField = InputField;
LetterCounter.Label = Label;

export { LetterCounter };
