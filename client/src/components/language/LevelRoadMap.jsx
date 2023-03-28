import { NavLink } from "react-router-dom";
import { useGetUnitsQuery } from "../../services/redux/API/usersAPI";

function LevelRoadMap() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);
  return (
    <div className="levelroadmap">
      <div className="levelroadmap__sidebar">
        <div className="levelroadmap__sidebar-header">
          <h2>Қазақ тілін үйрену</h2>
          <h3>Бастауыш деңгей</h3>
        </div>
        <div className="levelroadmap__sidebar-units">
          {data.map((unit, index) => {
            return (
              <NavLink
                className="navlink"
                to={`/language/study/beginner/${index + 1}`}
              >
                <p>{unit.title}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LevelRoadMap;
