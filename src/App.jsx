import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'

function App() {
  const indexRandom = getRandomNumber(quotes.length)

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])

  const objStyle = {
    backgroundImage: `url(fondo${bgSelected}.jpeg)`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    flexditection:'colum',
  }

  const h1Style = {
    marginBottom: '20px' 
  }

  return (
    <div style={objStyle} className='container'>
      <h1 style={h1Style}>Prueba tu suerte Hoy</h1>
      <Phrase 
        phraseSelected={phraseSelected} 
      />
      <BtnPhrase 
        setPhraseSelected={setPhraseSelected}
        setBgSelected={setBgSelected}
        className="flat"
      />
    </div>
  )
}

export default App
