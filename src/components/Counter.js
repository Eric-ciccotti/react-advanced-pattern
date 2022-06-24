import React from 'react'
import { useLetterContext } from '../useLetterContext'

const Counter = ({ max }) => {

    const { wordsLength } = useLetterContext();
    const hasError = max ? wordsLength >= max : false;

    return (
        <React.Fragment>
            <p>Nombre de caractère : {wordsLength}</p>
            {hasError && <p>Nombre de caratère maximum atteint.</p>}
        </React.Fragment >
    )
}

export {Counter};
