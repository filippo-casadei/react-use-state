import Card from './components/Card.jsx';
import Bottone from './components/Bottone.jsx';
import BottoneList from './components/BottoneList.jsx';
import { useState } from 'react';
import './App.css'


function App() {
  const [attivo, setAttivo] = useState(null);
  
  return (
    <>
    <BottoneList attivo={attivo} setAttivo={setAttivo} />
    <Card />
    </>
  )
};

export default App;


