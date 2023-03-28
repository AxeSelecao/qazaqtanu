import { useNavigate, NavLink } from "react-router-dom";
import arrowBackIcon from "../../../../assets/icons/arrow-back.svg";

function Study() {
  let navigate = useNavigate();
  return (
    <div className="study">
      <div className="study__container">
        <div className="study__container-header">
          <img
            style={{ width: 50, cursor: "pointer" }}
            onClick={() => navigate(-1)}
            src={arrowBackIcon}
            alt="back"
          />
          <h1>Oқу</h1>
        </div>
        <div className="study__container-levels">
          <NavLink className="navlink" to="/language/study/beginner/unit-1">
            <p>Бастауыш</p>
          </NavLink>
          <NavLink className="navlink" to="/language/study/intermediate">
            <p>Орташа</p>
          </NavLink>
          <NavLink className="navlink" to="/language/study/advanced">
            <p>Жоғары</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Study;
