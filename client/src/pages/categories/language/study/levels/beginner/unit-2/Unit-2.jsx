import { useNavigate } from "react-router-dom";
import { useGetUnitsQuery } from "../../../../../../../services/redux/API/usersAPI";

function Unit2() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(data[0].units[0].materials);

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title">
          {data[0].units[1].materials[0].title[0]}
        </h1>
        <h2 className="unit__container-description">
          {data[0].units[1].materials[0].description}
        </h2>
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

export default Unit2;
