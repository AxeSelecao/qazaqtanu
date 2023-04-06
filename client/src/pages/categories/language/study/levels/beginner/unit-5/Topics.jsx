import { useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit5_Topics() {
  const profileData = useSelector((state) => state.login.account);
  const dispatch = useDispatch();

  const [makeComplete, isError] = useMakeCompleteMutation();

  const handleMakeComplete = async (data) => {
    await makeComplete(data).unwrap;
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
        <h1 className="unit__container-title" style={{ marginBottom: 0 }}>
          {data[0].units[4].materials[0].title[1]}
        </h1>
        <h2 style={{ marginBottom: 20, textAlign: "center" }}>
          ({data[0].units[4].materials[0].title[0]})
        </h2>
        <p className="unit__container-description">
          {data[0].units[4].materials[0].description[0][0]}
        </p>
        <div className="unit__table" style={{ width: "100%" }}>
          <div className="unit__table-header">
            <div className="unit__table-left-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>дар/дер</h2>
            </div>
            <div className="unit__table-right-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>
                л, м, н, ң, ж, з
              </h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div className="unit__table-left-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>тар/тер</h2>
            </div>
            <div className="unit__table-right-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>
                қатаң дауыссыздар + б, в, г, д
              </h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div className="unit__table-left-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>лар/лер</h2>
            </div>
            <div className="unit__table-right-side" style={{ paddingLeft: 0 }}>
              <h2 style={{ width: "100%", textAlign: "center" }}>
                дауыстылар + й, р, у
              </h2>
            </div>
          </div>
        </div>
        <p
          className="unit__container-description"
          style={{ marginTop: 20, marginBottom: 0 }}
        >
          Мысалы (Пример):
        </p>
        <ul>
          {data[0].units[4].materials[0].description[1].map((desc, i) => {
            return (
              <p
                className="unit__container-description"
                style={{
                  marginBottom: 0,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                ◉ {desc}
              </p>
            );
          })}
        </ul>
        <p
          className="unit__container-description"
          style={{ marginTop: 20, textDecoration: "underline" }}
        >
          {data[0].units[4].materials[0].description[2][0]}
        </p>
        {data[0].units[4].materials[0].description[3].map((desc, i) => {
          return (
            <span
              className="unit__container-description"
              style={{
                marginBottom: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              ◉ {desc}
            </span>
          );
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center",
            marginTop: 30,
            width: "100%",
          }}
        >
          <button
            className="button-next"
            style={{ display: "flex", alignSelf: "end" }}
            onClick={() => {
              axios
                .get(`http://localhost:8000/user/${profileData._id}`)
                .then((res) => {
                  if (!res.data.results[0].units[4].materials[0].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-5",
                      material_id: "642ef4bb92afe3bf613881b0",
                    });
                  }
                });
              navigate("/language/study/beginner/unit-5/task/1");
            }}
          >
            Следующий шаг
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit5_Topics;
