import { useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit6_Topics() {
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
          {data[0].units[5].materials[0].title[0]}
        </h1>
        <h2 style={{ marginBottom: 20, textAlign: "center" }}>
          ({data[0].units[5].materials[0].title[1]})
        </h2>
        <p className="unit__container-description">
          {data[0].units[5].materials[0].description[0]}
        </p>
        <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
          {data[0].units[5].materials[0].description[1]}
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
          <div>
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
                Мысалы: дала, бас, қалам.
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
                Мысалы: мекенжай, балабақша.
              </p>
            </ul>
          </div>
          <div>
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
                Негізгі (Непроизводное – нет суффикса)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: мектеп, мысық.
              </p>
              <li
                className="unit__container-description"
                style={{ marginBottom: 0 }}
              >
                Туынды (Производное – есть суффикс)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: әнші, аспаз.
              </p>
            </ul>
          </div>
          <div>
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
                Жалпы (Нарицательное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: теледидар, үстел.
              </p>
              <li
                className="unit__container-description"
                style={{ marginBottom: 0 }}
              >
                Жалқы (Собственное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: Алматы, Татьяна, Қазақстан.
              </p>
              <li
                className="unit__container-description"
                style={{ marginBottom: 0 }}
              >
                Деректі (Конкретное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: үй, өзен, сиыр.
              </p>
              <li className="unit__container-description">
                Дерексіз (Абстрактное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: ақыл, ой, күн.
              </p>
              <li className="unit__container-description">
                Жанды (Одушевленное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: оқушы, мұғалім, адам.
              </p>
              <li className="unit__container-description">
                Дерексіз (Неодушевленное)
              </li>
              <p
                className="unit__container-description"
                style={{ fontSize: 16, fontStyle: "italic" }}
              >
                Мысалы: кілем, тақта, қарындаш.
              </p>
            </ul>
          </div>
        </div>
        <div
          className="unit__dictionary"
          style={{
            marginTop: 20,
            width: "27%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Сөздік (словарь)
          </h2>
          <div
            className="unit__dictionary-words"
            style={{
              fontSize: 25,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>ақ</p> - <p>белый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>сарғыш</p> - <p>желтоватый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>сары</p> - <p>жёлтый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>қызғылт сары</p> - <p>оранжевый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>қоңыр</p> - <p>коричневый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>қызыл</p> - <p>красный</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>қызғылт</p> - <p>розовый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>күлгін</p> - <p>фиолетовый</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>көк</p> - <p>синий</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>көгілдір</p> - <p>голубой</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>жасыл</p> - <p>зелёный</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>қара</p> - <p>чёрный</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>сұр</p> - <p>серый</p>
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
                  if (!res.data.results[0].units[5].materials[0].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-6",
                      material_id:
                        res.data.results[0].units[5].materials[0]._id,
                    });
                  }
                });
              navigate("/language/study/beginner/unit-6/task/1");
            }}
          >
            Следующий шаг
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unit6_Topics;
