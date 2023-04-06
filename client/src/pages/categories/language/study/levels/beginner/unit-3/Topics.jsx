import { useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit3_Topics() {
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
      <div
        className="unit__container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h1 className="unit__container-title" style={{ marginBottom: 0 }}>
          {data[0].units[2].materials[0].title[1]}
        </h1>
        <h2 style={{ marginBottom: 20 }}>
          ({data[0].units[2].materials[0].title[0]})
        </h2>
        <p className="unit__container-description">
          {data[0].units[2].materials[0].description[0][0]}
        </p>
        <div className="unit__table">
          <div className="unit__table-header">
            <h2>Единственное число</h2>
            <h2>Множественное число</h2>
          </div>
          <div className="unit__table-container">
            <div className="unit__table-left-side">
              <h2>Мен - Я</h2>
              <h2>Сен - Ты</h2>
              <h2>Сіз - Вы</h2>
              <h2>Ол - Он, Она, Оно</h2>
            </div>
            <div className="unit__table-right-side">
              <h2>Біз - Мы</h2>
              <h2>Сендер - Вы</h2>
              <h2>Сіздер - Вы(уваж.форма)</h2>
              <h2>Олар - Они</h2>
            </div>
          </div>
        </div>
        <p className="unit__container-description" style={{ marginTop: 20 }}>
          {data[0].units[2].materials[0].description[0][1]}
        </p>
        <div className="unit__table">
          <div className="unit__table-header">
            <h2>Местоимения</h2>
            <h2>Окончания</h2>
          </div>
          <div
            className="unit__table-container"
            style={{ flexDirection: "column" }}
          >
            <div className="unit__table-top-side">
              <div className="unit__table-left-side">
                <h2>Мен</h2>
                <h2>Біз</h2>
              </div>
              <div
                className="unit__table-right-side"
                style={{ paddingLeft: 50 }}
              >
                <h2>мын / мін (бын / бін, пын / пін)</h2>
                <h2>мыз / міз (быз / біз, пыз / піз)</h2>
              </div>
            </div>
            <div className="unit__table-middle-side">
              <div className="unit__table-left-side">
                <h2>Сен</h2>
                <h2>Сендер</h2>
                <h2>Сіз</h2>
                <h2>Сіздер</h2>
              </div>
              <div className="unit__table-right-side">
                <h2>сың / сің</h2>
                <h2>сыңдар / сіңдер</h2>
                <h2>сыз / сіз</h2>
                <h2>сыздар / сіздер</h2>
              </div>
            </div>
            <div className="unit__table-bottom-side">
              <div className="unit__table-left-side">
                <h2>Ол</h2>
                <h2>Олар</h2>
              </div>
              <div
                className="unit__table-right-side"
                style={{ textAlign: "center", paddingLeft: 0 }}
              >
                <h2>-</h2>
                <h2>-</h2>
              </div>
            </div>
          </div>
        </div>
        <p className="unit__container-description" style={{ marginTop: 20 }}>
          Пример:
        </p>
        <div className="unit__table">
          <div className="unit__table-header">
            <h2>Казахский язык</h2>
            <h2>Русский язык</h2>
          </div>
          <div
            className="unit__table-container"
            style={{ flexDirection: "column" }}
          >
            <div className="unit__table-top-side">
              <div className="unit__table-left-side">
                <h2>{data[0].units[2].materials[0].description[1][0]}</h2>
                <h2>{data[0].units[2].materials[0].description[2][0]}</h2>
              </div>
              <div className="unit__table-right-side">
                <h2>{data[0].units[2].materials[0].description[1][1]}</h2>
                <h2>{data[0].units[2].materials[0].description[2][1]}</h2>
              </div>
            </div>
            <div className="unit__table-middle-side">
              <div className="unit__table-left-side">
                <h2>{data[0].units[2].materials[0].description[3][0]}</h2>
                <h2>{data[0].units[2].materials[0].description[4][0]}</h2>
                <h2>{data[0].units[2].materials[0].description[5][0]}</h2>
                <h2>{data[0].units[2].materials[0].description[6][0]}</h2>
              </div>
              <div className="unit__table-right-side">
                <h2>{data[0].units[2].materials[0].description[3][1]}</h2>
                <h2>{data[0].units[2].materials[0].description[4][1]}</h2>
                <h2>{data[0].units[2].materials[0].description[5][1]}</h2>
                <h2>{data[0].units[2].materials[0].description[6][1]}</h2>
              </div>
            </div>
            <div className="unit__table-bottom-side">
              <div className="unit__table-left-side">
                <h2>{data[0].units[2].materials[0].description[7][0]}</h2>
                <h2>{data[0].units[2].materials[0].description[8][0]}</h2>
              </div>
              <div className="unit__table-right-side">
                <h2>{data[0].units[2].materials[0].description[7][1]}</h2>
                <h2>{data[0].units[2].materials[0].description[8][1]}</h2>
              </div>
            </div>
          </div>
          <div className="unit__table-container">
            <div className="unit__table-left-side"></div>
            <div className="unit__table-right-side"></div>
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
                  if (!res.data.results[0].units[2].materials[0].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-3",
                      material_id: "642dc49251c7da428e97b763",
                    });
                  }
                });
              navigate("/language/study/beginner/unit-3/task/1");
            }}
          >
            Следующий шаг
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit3_Topics;
