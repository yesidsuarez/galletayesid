import getRandomNumber from "../utils/getRandomNumber"
import quotes from "../data/phrases.json"
import photos from "../data/photos.json"

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {

    const changePhrase = () => {

        const indexRandom = getRandomNumber(quotes.length)

        setPhraseSelected(quotes[indexRandom])

        setBgSelected(photos[getRandomNumber(photos.length)])

    }

  return (
    <button onClick={changePhrase}>Galleta de la fortuna</button>
  )
}

export default BtnPhrase