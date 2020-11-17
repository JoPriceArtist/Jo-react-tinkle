import logo from './logo.svg';
import './App.css';

import WinesManager from './components/winesManager'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <WinesManager />
    </div>
  );
}

export default App;
