import React from "react";
import { useLetterContext } from "../useLetterContext";

const InputField = ({max}) => {
    const { setWord, enteredWord } = useLetterContext();

    return (
        <div>
            <input type="text" onChange={setWord} disabled={enteredWord?.length >= max}/>

        </div>
    );
};

export {InputField};
