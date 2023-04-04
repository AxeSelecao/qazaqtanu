import { NavLink, useLocation } from "react-router-dom";
import { useGetUnitsQuery } from "../../services/redux/API/usersAPI";

function LevelRoadMap() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let location = useLocation();

  return (
    <div className="levelroadmap">
      <div className="levelroadmap__sidebar">
        <div className="levelroadmap__sidebar-header">
          <h2>Обучение казахскому языку</h2>
          <h3>Начинающий уровень</h3>
        </div>
        <div className="levelroadmap__sidebar-units">
          {data[0].units.map((unit, index) => {
            return (
              <NavLink
                className="navlink"
                to={`/language/study/beginner/unit-${index + 1}`}
              >
                <h4
                  className={`${
                    location.pathname[30] == index + 1 ? "navlink-active" : ""
                  }`}
                >
                  {index + 1}. {unit.title[0]}
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
