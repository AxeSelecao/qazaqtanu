import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit9_Topics({ unit }) {
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
                  Мысалы: бір, екі, жүз.
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
                  Мысалы: бес мың, он төрт.
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
                  Мысалы: бір, екі, елу.
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
                  Мысалы: бірінші, біреу, ондай.
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
                  Есептік (Количественное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: бір, жүз, жиырма мың.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Реттік (Порядковое)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: бірінші, екінші, бесінші.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Жинақтық (Собирательное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: біреу, екеу, …, жетеу.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Топтау (Группирующее)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: бірден, екіден, он бестен.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Болжалдық (Приблизительное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: бірер, ондаған, үш-төрттей.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Бөлшектік (Дробное)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: екіден бір, үш бүтін жүзден он төрт.
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
}

export default Unit9_Topics;
