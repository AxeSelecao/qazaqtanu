import { useNavigate } from "react-router-dom";
import AlphabetComponent from "../../../../../../../components/AlphabetComponent";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit1_Topic1() {
  const profileData = useSelector((state) => state.login.account);
  const dispatch = useDispatch();

  const [makeComplete, isError] = useMakeCompleteMutation();

  const handleMakeComplete = async (data) => {
    await makeComplete(data).unwrap();
  };

  const [addPoints] = useAddPointsMutation();

  const handleAddPoints = async (data) => {
    await addPoints(data).unwrap();
  };

  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title">
          {data[0].units[0].materials[0].title[1]} (
          {data[0].units[0].materials[0].title[0]})
        </h1>
        <p className="unit__container-description">
          {data[0].units[0].materials[0].description[0]}
        </p>
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
          <button
            className="button-next"
            onClick={() => {
              axios
                .get(`http://localhost:8000/user/${profileData._id}`)
                .then((res) => {
                  if (!res.data.results[0].units[0].materials[0].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-1",
                      material_id: "642abdde83531f58038fc9e7",
                    });
                  }
                });
              navigate("/language/study/beginner/unit-1/task/1");
            }}
          >
            Следующий шаг
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit1_Topic1;
