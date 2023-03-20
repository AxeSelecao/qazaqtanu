import logo from "../assets/icons/history.svg";
import avatar from "../assets/images/header/avatar.jpg";
import coin from "../assets/icons/coin.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../services/redux/slice";
import { useState } from "react";

export const Header = () => {
  const isLogged = useSelector((state) => state.login.isLogged);
  const dispatch = useDispatch();
  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);
  const categories = [
    "Tarih",
    "Til",
    "Ädebiet",
    "Dästürler",
    "Din",
    "Muzyka",
    "Öner",
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__categories">
          <NavLink to={""}>
            <img className="header__categories-logo" src={logo} />
          </NavLink>
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
                  <NavLink className="navlink">
                    <p>Profil</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Tapsyrmalar</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Market</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Parametrler</p>
                  </NavLink>
                  <NavLink className="navlink signout">
                    <p onClick={() => dispatch(logOut())}>Shygu</p>
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
                Tirkelu
              </NavLink>
              <NavLink
                to={"authorization"}
                className="header__personal-authorization-button navlink"
              >
                Kiru
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
