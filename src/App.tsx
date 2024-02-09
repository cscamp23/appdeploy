import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path=></Route>
      </Routes>
    </BrowserRouter>
  )

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Counter</h1>
        <p>Number of clicks: {count}</p>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
