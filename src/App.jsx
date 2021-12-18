import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'></header>
      <Chart />
    </div>
  );
}

export default App;
