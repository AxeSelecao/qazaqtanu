import { Outlet } from "react-router-dom";
import LevelRoadMap from "../../../../../../components/language/LevelRoadMap";

function Beginner() {
  return (
    <div className="level">
      <LevelRoadMap />
      <Outlet className="level__content"/>
    </div>
  );
}

export default Beginner;
