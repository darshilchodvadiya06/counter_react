import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1);
  };
  const decrement = () => {
    setData(data - 1);
  };
  useEffect(() => {
    alert("show my counter...") 
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>✨ System ✨</h1>
          <button onClick={increment}>Increment</button>
          <p>Counter:{data}</p>
          <button onClick={decrement}>Decrement</button>

        </div>
      </header>
    </div>
  );
}

export default App;
