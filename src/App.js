
import { useState } from 'react';
import './App.css';
import { LetterCounter } from './LetterCounter';
import { Transition } from '@mantine/core';

function App() {

  //control props pattern
  //ex : APP , le parent , control LetterCounte l'enfant
  //ici mon utilisateur(codeur) peut oui/non afficher le component
  const [hideChild, setHideChild] = useState(true)

  const handleHideChild = () => {
    console.log(hideChild);
    setHideChild(!hideChild);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="button" value="parent hide enfant" onClick={handleHideChild} />
        <Transition duration={800} mounted={hideChild} transition="scale">
        {(styles) => <div style={styles}>
          
          
        <LetterCounter hide={hideChild}>
            <LetterCounter.Label titre="Le super compteur de mot" />
            <LetterCounter.InputField max={5} />
            <LetterCounter.Counter />
          </LetterCounter>
          
          
          </div>}
        
        </Transition>
      </header>
    </div>
  );
}

export default App;
