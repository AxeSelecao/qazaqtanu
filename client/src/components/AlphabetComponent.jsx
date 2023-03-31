import { useState } from "react";
import LetterModal from "./language/LetterModal";

function AlphabetComponent() {
  const kyrillicAlphabet = "АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ";
  const kyrillicAlphabetArr = kyrillicAlphabet.split("");
  const latinAlphabet = "AÄBDEFGĞHIİJKLMNÑOÖPQRSŞTUŪÜVYZ";
  const latinAlphabetArr = latinAlphabet.split("");
  const [letterModalActive, setLetterBookModalActive] = useState(false);
  const [symbol, setSymbol] = useState("A");
  const [letter, setLetter] = useState();
  const [alphabet, setAlphabet] = useState(kyrillicAlphabetArr);

  const soundLetter = (letter) => {
    let type;
    if (kyrillicAlphabetArr.includes(letter)) {
      type = "kyrillic";
    } else if (latinAlphabetArr.includes(letter)) {
      type = "latin";
    }
    let audio = new Audio(
      `/audio/language/alphabet/${type}/letter-${letter}.ogg`
    );
    audio.play();
  };
  return (
    <div>
      <LetterModal
        active={letterModalActive}
        setActive={setLetterBookModalActive}
        symbol={symbol}
        letter={letter}
      />
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}
      >
        <h2
          className="pointer"
          onClick={() => {
            setAlphabet(kyrillicAlphabetArr);
          }}
        >
          Кириллица
        </h2>
        <h2
          className="pointer"
          onClick={() => {
            setAlphabet(latinAlphabetArr);
          }}
        >
          Латиница
        </h2>
      </div>
      <div className="alphabet__container">
        {alphabet.map((letter, index) => {
          if (index > 35) {
            return (
              <div
                className="alphabet__container-letter"
                onClick={() => {
                  setLetterBookModalActive(true);
                  setSymbol(letter);
                  soundLetter(letter);
                  setLetter(letter);
                }}
                style={{ marginBottom: 0 }}
              >
                <p>{letter}</p>
                <p>{letter.toLowerCase()}</p>
              </div>
            );
          } else {
            return (
              <div
                className="alphabet__container-letter pointer"
                onClick={() => {
                  setLetterBookModalActive(true);
                  setSymbol(letter);
                  soundLetter(letter);
                  setLetter(letter);
                }}
              >
                <p>{letter}</p>
                <p>{letter.toLowerCase()}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default AlphabetComponent;
