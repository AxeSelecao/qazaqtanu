import { useNavigate, useParams } from "react-router-dom";
import AlphabetComponent from "../../../../../../../components/AlphabetComponent";
import { useGetUnitsQuery } from "../../../../../../../services/redux/API/usersAPI";

function Unit1() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  return (
    <div className="unit">
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ display: "block" }}>
          {!isLoading ? data[0].title : <></>}
        </h1>
        <h2 style={{ textAlign: "justify", margin: "20px 0 " }}>
          {!isLoading ? data[0].materials[0].description : <></>}
        </h2>
        <h2 style={{ textAlign: "justify", margin: "0 0 30px 0" }}>
          {!isLoading ? data[0].materials[0].description1 : <></>}
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
          <button className="button-next" onClick={() => navigate("task-1")}>
            Келесі қадам
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit1;
