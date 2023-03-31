function LetterModal({ active, setActive, symbol, letter, isKyrillic }) {
  const kyrillicAlphabet = "АӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ";
  const kyrillicAlphabetArr = kyrillicAlphabet.split("");
  const latinAlphabet = "AÄBDEFGĞHIİJKLMNÑOÖPQRSŞTUŪÜVYZ";
  const latinAlphabetArr = latinAlphabet.split("");
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
    <div
      className={active ? "modal active form-wrapper" : "modal form-wrapper"}
      onClick={() => setActive(false)}
    >
      <div
        className="alphabet__container-letter pointer"
        onClick={(e) => {
          e.stopPropagation();
          soundLetter(letter);
        }}
        style={{ zIndex: 200 }}
      >
        <p>{symbol}</p>
        <p>{symbol.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default LetterModal;
