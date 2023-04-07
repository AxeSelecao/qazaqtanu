import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useGetUnitsQuery } from "../../services/redux/API/usersAPI";
import { setUnitNum } from "../../services/redux/slice";
import { useDispatch } from "react-redux";

function LevelRoadMap() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let location = useLocation();

  return (
    <div className="levelroadmap">
      <div className="levelroadmap__sidebar">
        <div className="levelroadmap__sidebar-header">
          <h2 onClick={() => navigate("/language")} style={{ paddingLeft: 17 }}>
            Обучение казахскому языку
          </h2>
          <h3
            onClick={() => navigate("/language/study")}
            style={{ paddingLeft: 17 }}
          >
            Начинающий уровень
          </h3>
        </div>
        <div className="levelroadmap__sidebar-units">
          {data[0].units.map((unit, index) => {
            return (
              <NavLink
                className="navlink"
                to={`/language/study/beginner/unit-${index + 1}/topic/1`}
                onClick={() => dispatch(setUnitNum(index + 1))}
              >
                <h4
                  className={`${
                    location.pathname[30] == index + 1 ? "navlink-active" : ""
                  }`}
                >
                  {index + 1}. {unit.title[1]} <br />({unit.title[0]})
                </h4>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LevelRoadMap;
