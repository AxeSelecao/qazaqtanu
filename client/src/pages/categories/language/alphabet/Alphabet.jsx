import { useState } from "react";

function Alphabet() {
  const kyrillicAlphabet = "АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫIЬЭЮЯ";
  const kyrillicAlphabetArr = kyrillicAlphabet.split("");
  const latinAlphabet = "AÄBDEFGĞHIİJKLMNÑOÖPQRSŞTUŪÜVYZ";
  const latinAlphabetArr = latinAlphabet.split("");

  const [alphabet, setAlphabet] = useState(kyrillicAlphabetArr);
  return (
    <div className="alphabet">
      <h1>Alippe</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}
      >
        <h2
          className="pointer"
          onClick={() => setAlphabet(kyrillicAlphabetArr)}
        >
          Кириллица
        </h2>
        <h2 className="pointer" onClick={() => setAlphabet(latinAlphabetArr)}>
          Латиница
        </h2>
      </div>
      <div className="alphabet__container">
        {alphabet.map((letter, index) => {
          if (index > 35) {
            return (
              <div
                className="alphabet__container-letter"
                style={{ marginBottom: 0 }}
              >
                <p>{letter}</p>
                <p>{letter.toLowerCase()}</p>
              </div>
            );
          } else {
            return (
              <div className="alphabet__container-letter pointer">
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

export default Alphabet;
