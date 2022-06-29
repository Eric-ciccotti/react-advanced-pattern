import React from 'react';
import { useLetterContext } from '../useLetterContext';

const InputField = () => {
  const { setWord, enteredWord, max } = useLetterContext();

  return (
    <div>
      <input
        type="text"
        onChange={setWord}
        disabled={enteredWord?.length >= max}
      />
    </div>
  );
};

export { InputField };
