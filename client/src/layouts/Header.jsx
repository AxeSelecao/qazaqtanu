import logo from "../assets/icons/history.svg";
import avatar from "../assets/images/header/avatar.jpg";
import coin from "../assets/icons/coin.png";

export const Header = () => {
  const categories = [
    "Tarih",
    "Til",
    "Ädebiet",
    "Dästürler",
    "Din",
    "Muzyka",
    "Öner",
    "Kino",
  ];
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__categories">
          <img className="header__categories-logo" src={logo} />
          <div className="header__categories-navbar">
            {categories.map((category, index) => {
              return (
                <p className="header__categories-link" key={index}>
                  {category}
                </p>
              );
            })}
          </div>
        </div>
        <div className="header__personal">
          <input
            className="header__personal-searcher"
            type="text"
            placeholder="Taqyrypty izdeu"
          />
          <div className="header__personal-points">
            <img className="header__personal-storage" src={coin} alt="" />
            <p className="header__personal-value">911</p>
          </div>
          <div className="header__personal-profile">
            <img className="header__personal-avatar" src={avatar} />
          </div>
        </div>
      </div>
    </header>
  );
};
