function LetterModal({ active, setActive, symbol }) {
  return (
    <div
      className={active ? "modal active form-wrapper" : "modal form-wrapper"}
      onClick={() => setActive(false)}
    >
      <div className="alphabet__container-letter pointer" style={{zIndex: 200}}>
        <p>{symbol}</p>
        <p>{symbol.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default LetterModal;
