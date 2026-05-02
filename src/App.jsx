import Card from './components/Card.jsx';
import Bottone from './components/Bottone.jsx';
import BottoneList from './components/BottoneList.jsx';
import languages from './data/languages.js';
import { useState } from 'react';
import './App.css'


function App() {
  const [attivo, setAttivo] = useState(null);

  let selectedLanguage = undefined;

  if (attivo !== null) {
    selectedLanguage = languages.find(function (elemento) {
      return elemento.id === attivo;
    });
  }

  return (
    <>
      <BottoneList attivo={attivo} setAttivo={setAttivo} />
      <Card selectedLanguage={selectedLanguage} />
    </>
  )
};

export default App;


