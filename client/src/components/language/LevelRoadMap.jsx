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
        <div
          className="levelroadmap__sidebar-header"
          style={{ borderBottom: "1px solid black", paddingBottom: 10 }}
        >
          <h2>Қазақ тілін үйрену</h2>
          <h3>Бастауыш деңгей</h3>
        </div>
        <div className="levelroadmap__sidebar-units" style={{ marginTop: 10 }}>
          {data.map((unit, index) => {
            return (
              <NavLink
                className="navlink"
                style={{ color: "black", fontSize: 18 }}
                to={`/language/study/beginner/unit-${index + 1}`}
              >
                <h4>
                  {index + 1}. {unit.title}
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
