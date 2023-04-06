import { useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit4_Topics() {
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
          {data[0].units[3].materials[0].title[1]}
        </h1>
        <h2 style={{ marginBottom: 20, textAlign: "center" }}>
          ({data[0].units[3].materials[0].title[0]})
        </h2>
        <p className="unit__container-description">
          {data[0].units[3].materials[0].description[0][0]}
        </p>
        <p className="unit__container-description">
          {data[0].units[3].materials[0].description[1][0]}
        </p>
        <div className="unit__table" style={{ width: "100%" }}>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Жақ (Лицо)</h2>
              <h2 style={{ width: "50%" }}>Сан (Число)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Есімдік (Местоимение)</h2>
              <h2 style={{ width: "50%" }}>Жалғаулар (Окончания)</h2>
            </div>
          </div>

          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>1 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Менің</h2>
              <h2 style={{ width: "50%" }}>ым/ім, м</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сенің</h2>
              <h2 style={{ width: "50%" }}>ың/ің, ң</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сіздің</h2>
              <h2 style={{ width: "50%" }}>ыңыз/іңіз, ңыз/ңіз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>3 жақ (3 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Оның</h2>
              <h2 style={{ width: "50%" }}>сы/сі, ы/і</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>1 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Біздің</h2>
              <h2 style={{ width: "50%" }}>ымыз/іміз, мыз/міз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сендердiң</h2>
              <h2 style={{ width: "50%" }}>К.Ж. + ың/ің</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сіздердің</h2>
              <h2 style={{ width: "50%" }}>К.Ж. + ыңыз/іңіз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>3 жақ (3 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Олардың</h2>
              <h2 style={{ width: "50%" }}>К.Ж. + ы/і</h2>
            </div>
          </div>
        </div>
        <p className="unit__container-description" style={{ marginTop: 20 }}>
          Мысалы (Пример):
        </p>
        <div className="unit__table" style={{ width: "100%" }}>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Жақ (Лицо)</h2>
              <h2 style={{ width: "50%" }}>Сан (Число)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Есімдік (Местоимение)</h2>
              <h2 style={{ width: "50%" }}>Мектеп (Школа)</h2>
            </div>
          </div>

          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>1 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Менің</h2>
              <h2 style={{ width: "50%" }}>мектебім</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сенің</h2>
              <h2 style={{ width: "50%" }}>мектебің</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сіздің</h2>
              <h2 style={{ width: "50%" }}>мектебіңіз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>3 жақ (3 лицо)</h2>
              <h2 style={{ width: "50%" }}>жекеше (ед.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Оның</h2>
              <h2 style={{ width: "50%" }}>мектебі</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>1 жақ (1 лицо)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Біздің</h2>
              <h2 style={{ width: "50%" }}>мектебіміз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сендердiң</h2>
              <h2 style={{ width: "50%" }}>мектептерің</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>2 жақ (2 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Сіздердің</h2>
              <h2 style={{ width: "50%" }}>мектептеріңіз</h2>
            </div>
          </div>
          <div className="unit__table-header">
            <div
              className="unit__table-left-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>3 жақ (3 лицо ув.)</h2>
              <h2 style={{ width: "50%" }}>көпше (мн.ч.)</h2>
            </div>
            <div
              className="unit__table-right-side"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 0,
              }}
            >
              <h2 style={{ width: "50%" }}>Олардың</h2>
              <h2 style={{ width: "50%" }}>мектептері</h2>
            </div>
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
                  if (!res.data.results[0].units[3].materials[0].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-4",
                      material_id: "642eb24092afe3bf613881ad",
                    });
                  }
                });
              navigate("/language/study/beginner/unit-4/task/1");
            }}
          >
            Следующий шаг
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit4_Topics;
