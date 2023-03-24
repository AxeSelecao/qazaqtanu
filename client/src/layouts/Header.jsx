import logo from "../assets/icons/history.svg";
import avatar from "../assets/images/header/avatar.jpg";
import coin from "../assets/icons/coin.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut, unsetAccount } from "../services/redux/slice";
import { useState } from "react";

export const Header = () => {
  const isLogged = useSelector((state) => state.login.isLogged);
  const dispatch = useDispatch();
  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);
  const categories = [
    "Тарих",
    "Тіл",
    "Әдебиет",
    "Дәстүрлер",
    "Дің",
    "Музыка",
    "Өнер",
  ];
  const links = [
    "history",
    "language",
    "literature",
    "traditions",
    "religion",
    "music",
    "art",
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__categories">
          <NavLink className="navlink" to={""}>
            <img className="header__categories-logo" src={logo} />
          </NavLink>
          <div className="header__categories-navbar">
            {categories.map((category, index) => {
              return (
                <NavLink className="navlink" to={`/${links[index]}`}>
                  <p className="header__categories-link" key={index}>
                    {category}
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="header__personal">
          <input
            className="header__personal-searcher"
            type="text"
            placeholder="Тақырыпту іздеу"
          />
          {isLogged ? (
            <>
              <div className="header__personal-points">
                <img className="header__personal-storage" src={coin} alt="" />
                <p className="header__personal-value">911</p>
              </div>
              <div className="header__personal-profile">
                <img
                  className="header__personal-avatar pointer"
                  onClick={() => setDisplayProfileMenu(!displayProfileMenu)}
                  src={avatar}
                />
                <div
                  className="header__personal-settings"
                  style={
                    displayProfileMenu
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <NavLink className="navlink" to={"profile"}>
                    <p>Профиль</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Тапсырмалар</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Маркет</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Параметрлер</p>
                  </NavLink>
                  <NavLink className="navlink signout">
                    <p
                      onClick={() => {
                        dispatch(logOut());
                        dispatch(unsetAccount({}));
                      }}
                    >
                      Шығу
                    </p>
                  </NavLink>
                </div>
              </div>
            </>
          ) : (
            <div className="header__personal-authorization">
              <NavLink
                to={"registration"}
                className="header__personal-authorization-button navlink"
              >
                Тіркелу
              </NavLink>
              <NavLink
                to={"authorization"}
                className="header__personal-authorization-button navlink"
              >
                Кіру
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
