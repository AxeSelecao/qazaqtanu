import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit7_Topics({ unit }) {
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
                  Мысалы: сөйле, жаз, әкел.
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
                  Мысалы: бара жатыр, сатып алды.
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
                  Мысалы: кел, бар, айт.
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
                  Мысалы: амандас, ойнайды.
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
                  Болымды (Утвердительный)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: бар, кел, жаз.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Болымсыз (Отрицательный)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: оқымайды, айтпайды.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  Салт (Непереходный)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: тұрады, ойлайды.
                </p>
                <li className="unit__container-description">
                  Өздік (Переходный)
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: оқыды, көремін.
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
        <div className="unit__container" style={{ width: "80%" }}>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Етістік шақтары (Времена глаголов)
          </h2>
          <div
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
                Осы шақ (Настоящее время)
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  нақ (Түбір + а, е, й, ып, іп, п + жатыр/отыр/жүр/тұр) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: оқып жатырмын, бара жатыр.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  ауыспалы (Түбір + а, е, й) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: отырамын.
                </p>
              </ul>
            </div>
            <div style={{ width: "30%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                Келер шақ (Будущее время)
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  болжалды (Түбір + ар, ер, р) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: барармын.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  мақсатты (Түбір + мақ/мек, бақ/бек, пақ/пек + шы/ші) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: көрмекшімін.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  ауыспалы (Түбір + а, е, й) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: орындаймыз.
                </p>
              </ul>
            </div>
            <div style={{ width: "30%" }}>
              <p
                className="unit__container-description"
                style={{ textDecoration: "underline" }}
              >
                Өткен шақ (Прошедшее время)
              </p>
              <ul>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  жедел (Түбір + ды/ді, ты/ті) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: жақсы көрдім.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  бұрынғы (Түбір + ған/ген, қан/кен, ып, іп, п) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: барған.
                </p>
                <li
                  className="unit__container-description"
                  style={{ marginBottom: 0 }}
                >
                  ауыспалы (Түбір + атын, етін, йтын, йтін) + Ж.Ж.
                </li>
                <p
                  className="unit__container-description"
                  style={{ fontSize: 16, fontStyle: "italic" }}
                >
                  Мысалы: келетін.
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

  if (num == 3) {
    return (
      <div className="unit">
        <div className="unit__container">
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Етістік райлары (Наклонения глаголов)
          </h2>
          <br />
          <h3>1. Ашық (Простое)</h3>
          <p>Мысалы: барады.</p>
          <br />
          <h3>2. Бұйрық (Повелительное)</h3>
          <br />
          <table
            class="my_table"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="1"
          >
            <tbody>
              <tr>
                <td class="main" width="20%">
                  I жақ:
                </td>
                <td width="35%">
                  Мен Түбір + <b>айын, ейін</b>
                </td>
                <td>
                  Біз Түбір + <b>айық, ейік</b>
                </td>
              </tr>

              <tr>
                <td rowspan="2" class="main">
                  II жақ:
                </td>
                <td>Сен Түбір</td>
                <td>
                  Сендер Түбір +{" "}
                  <b>
                    ың<i>дар</i>, ің<i>дер</i>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  Сіз Түбір + <b>ыңыз, іңіз</b>
                </td>
                <td>
                  Сіздер Түбір +{" "}
                  <b>
                    ыңыз<i>дар</i>, іңіз<i>дер</i>
                  </b>
                </td>
              </tr>

              <tr>
                <td class="main">III жақ:</td>
                <td>
                  Ол Түбір + <b>сын, сін</b>
                </td>
                <td>
                  Олар Түбір + <b>сын, сін</b>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>Пример разбора:</p>
          <br />
          <table
            class="my_table"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="1"
          >
            <tbody>
              <tr>
                <td class="main" width="20%">
                  I жақ:
                </td>
                <td width="35%">
                  Мен бар<b>айын</b>
                </td>
                <td>
                  Біз бар<b>айық</b>
                </td>
              </tr>

              <tr>
                <td rowspan="2" class="main">
                  II жақ:
                </td>
                <td>Сен бар</td>
                <td>
                  Сендер бар
                  <b>
                    ың<i>дар</i>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  Сіз бар<b>ыңыз</b>
                </td>
                <td>
                  Сіздер бар
                  <b>
                    ыңыз<i>дар</i>
                  </b>
                </td>
              </tr>

              <tr>
                <td class="main">III жақ:</td>
                <td>
                  Ол бар<b>сын</b>
                </td>
                <td>
                  Олар бар<b>сын</b>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>3. Шартты (Условное)</h3>
          <p>(Түбір + са/се + Ж.Ж.)</p>
          <br />
          <p>Пример разбора:</p>
          <br />
          <table
            class="my_table"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="1"
          >
            <tbody>
              <tr>
                <td class="main" width="20%">
                  I жақ:
                </td>
                <td width="35%">
                  Мен бар<b>са</b>
                  <u>м</u>
                </td>
                <td>
                  Біз бар<b>са</b>
                  <u>қ</u>
                </td>
              </tr>

              <tr>
                <td rowspan="2" class="main">
                  II жақ:
                </td>
                <td>
                  Сен бар<b>са</b>
                  <u>ң</u>
                </td>
                <td>
                  Сендер бар<b>са</b>
                  <u>ңдар</u>
                </td>
              </tr>

              <tr>
                <td>
                  Сіз бар<b>са</b>
                  <u>ңыз</u>
                </td>
                <td>
                  Сіздер бар<b>са</b>
                  <u>ңыздар</u>
                </td>
              </tr>

              <tr>
                <td class="main">III жақ:</td>
                <td>
                  Ол бар<b>са</b>
                </td>
                <td>
                  Олар бар<b>са</b>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>4. Қалау (Желательное)</h3>
          <p>(Түбір + ғы/гі, қы/кі + Т.Ж.)</p>
          <br />
          <p>Пример разбора:</p>
          <br />
          <table
            class="my_table"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="1"
          >
            <tbody>
              <tr>
                <td class="main" width="20%">
                  I жақ:
                </td>
                <td width="35%">
                  Менің бар<b>ғы</b>
                  <u>м</u> келеді
                </td>
                <td>
                  Біздің бар<b>ғы</b>
                  <u>мыз</u> келеді
                </td>
              </tr>

              <tr>
                <td rowspan="2" class="main">
                  II жақ:
                </td>
                <td>
                  Сенің бар<b>ғы</b>
                  <u>ң</u> келеді
                </td>
                <td>
                  Сендердің бар<b>ғы</b>
                  <u>ларың</u> келеді
                </td>
              </tr>

              <tr>
                <td>
                  Сіздің бар<b>ғы</b>
                  <u>ңыз</u> келеді
                </td>
                <td>
                  Сіздердің бар<b>ғы</b>
                  <u>ларыңыз</u> келеді
                </td>
              </tr>

              <tr>
                <td class="main">III жақ:</td>
                <td>
                  Оның бар<b>ғы</b>
                  <u>сы</u> келеді
                </td>
                <td>
                  Олардың бар<b>ғы</b>
                  <u>лары</u> келеді
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Тұйық етістік (Начальная форма глагола)
          </h2>
          <h3>Түбір + у (жұрнақ)</h3>
          <p>Мысалы: бару, жазу, айту.</p>
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
                      !res.data.results[0].units[unit].materials[4].completed
                    ) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: `unit-${unit + 1}`,
                        material_id:
                          res.data.results[0].units[unit].materials[4]._id,
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-7/task/3");
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

export default Unit7_Topics;
