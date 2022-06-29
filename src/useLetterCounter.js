import { useState } from 'react';

const UseLetterCounter = () => {
  const [wordsLength, setWordsLenght] = useState(0);
  const [enteredWord, setEnteredWord] = useState(null);

  const setWord = (e) => {
    const inputWithoutSpace = e.target.value.replace(/\s/g, '');
    setWordsLenght(inputWithoutSpace.length);
    setEnteredWord(inputWithoutSpace);
    console.log(inputWithoutSpace.length);
  };

  return { setWord, wordsLength, enteredWord };
};

export default UseLetterCounter;
