
import './App.css';
import { LetterCounter } from './LetterCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LetterCounter>
          <LetterCounter.Label titre="Le super compteur de mot" />
          <LetterCounter.InputField max={5}/>
          <LetterCounter.Counter/>
        </LetterCounter>
      </header>
    </div>
  );
}

export default App;
