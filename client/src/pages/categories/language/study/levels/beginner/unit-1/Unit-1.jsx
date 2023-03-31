import { useNavigate } from "react-router-dom";
import AlphabetComponent from "../../../../../../../components/AlphabetComponent";
import { useGetUnitsQuery } from "../../../../../../../services/redux/API/usersAPI";

function Unit1() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title">
          {data[0].units[0].materials[0].title[0]}
        </h1>
        <h2 className="unit__container-description">
          {data[0].units[0].materials[0].description[0]}
        </h2>
        <AlphabetComponent />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <button className="button-next" onClick={() => navigate("tasks")}>
            Келесі қадам
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit1;
