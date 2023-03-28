import { Outlet } from "react-router-dom";
import LevelRoadMap from "../../../../../../components/language/LevelRoadMap";

function Beginner() {
  return (
    <div className="level">
      <LevelRoadMap />
      <Outlet />
    </div>
  );
}

export default Beginner;
