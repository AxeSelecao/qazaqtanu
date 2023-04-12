import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit8_Topics({ unit }) {
  const { num } = useParams();
  console.log(num);
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

  if (num == 1) {
    return (
      <div className="unit">
        <div className="unit__container">
          <h1 className="unit__container-title" style={{ marginBottom: 0 }}>
            {data[0].units[unit].title[1]}
          </h1>
          <h2 style={{ marginBottom: 20, textAlign: "center" }}>
            ({data[0].units[unit].title[0]})
          </h2>
          <p className="unit__container-description">
            {data[0].units[unit].materials[0].description[1]}
            <br />
            {data[0].units[unit].materials[0].description[0]}
          </p>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            {data[0].units[unit].materials[0].title[2]} (
            {data[0].units[unit].materials[0].title[3]})
          </h2>
          <div
            className="unit__"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "start",
              marginTop: 20,
              backgroundColor: "#e8e8e8",
              padding: "20px  30px",
              borderRadius: 5,
              border: "1px solid",
            }}
          >
            <div style={{ width: "30%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                құрамына қарай (по составу):
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Дара (Простое – один корень)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: әдемі, қызыл, ыңғайлы.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Күрделі (Сложное – несколько корней)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: қып-қызыл, жап-жасыл, өте көрікті.
                </p>
              </ul>
            </div>
            <div style={{ width: "30%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                тұлғасына қарай (по способу образования):
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Негізгі (Непроизводный – нет суффикса)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: алтын, ауыр, кең.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Туынды (Производный – есть суффикс)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: ақылды, пайдалы.
                </p>
              </ul>
            </div>
            <div style={{ width: "30%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                мағынасына қарай (по значению):
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Сапалық (Качественное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: ыстық, қоныр.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Қатыстық (Относительное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: таулы, өткір.
                </p>
              </ul>
            </div>
          </div>
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
                    if (
                      !res.data.results[0].units[unit].materials[0].completed
                    ) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: `unit-${unit + 1}`,
                        material_id:
                          res.data.results[0].units[unit].materials[0]._id,
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-7/task/1");
              }}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (num == 2) {
    return (
      <div className="unit">
        <div className="unit__container" style={{width: "80%"}}>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Сын есім шырайлары (Степени сравнения прилагательных)
          </h2>
          <div
            className="unit__"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "start",
              marginTop: 20,
              backgroundColor: "#e8e8e8",
              padding: "20px  30px",
              borderRadius: 5,
              border: "1px solid",
            }}
          >
            <div style={{ width: "22%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                1. Жай (Простая)
              </p>
              <ul>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: ауыр, жеңіл.
                </p>
              </ul>
            </div>
            <div style={{ width: "22%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                2. Салыстырмалы (Сравнительная)
              </p>
              <ul>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: алтын, ауыр, кең.
                </p>
              </ul>
            </div>
            <div style={{ width: "22%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                3. Күшейтпелі (Усилительная)
              </p>
              <ul>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: ыстық, қоныр.
                </p>
              </ul>
            </div>
            <div style={{ width: "22%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                4. Асырмалы (Превосходная)
              </p>
              <ul>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: ең жақсы, өте үлкен.
                </p>
              </ul>
            </div>
          </div>
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
                    if (
                      !res.data.results[0].units[unit].materials[2].completed
                    ) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: `unit-${unit + 1}`,
                        material_id:
                          res.data.results[0].units[unit].materials[2]._id,
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-7/task/2");
              }}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Unit8_Topics;
