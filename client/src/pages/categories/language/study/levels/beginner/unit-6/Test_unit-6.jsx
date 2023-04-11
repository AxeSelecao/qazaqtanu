import axios from "axios";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Test_Unit6({ unit }) {
  let { num } = useParams();
  const profileData = useSelector((state) => state.login.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addPoints, isError] = useAddPointsMutation();

  const handleAddPoints = async (data) => {
    await addPoints(data).unwrap();
  };

  const [makeComplete] = useMakeCompleteMutation();

  const handleMakeComplete = async (data) => {
    await makeComplete(data).unwrap();
  };

  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let answers = data[0].units[unit].materials[3].answers;
  console.log(answers);

  let chosenOptions = [];

  const solveAgain = () => {
    const optionsElems = document.querySelectorAll(".unit__test-answer-option");

    for (let i = 0; i < optionsElems.length; i++) {
      optionsElems[i].style.backgroundColor = "#968560";
      optionsElems[i].style.color = "#000";
    }
    chosenOptions = [];
    document.querySelector(".unit__test").style.pointerEvents = "all";
  };

  const checkAnswer = () => {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == chosenOptions[i]) {
      } else {
        document.querySelector(".unit__test").style.pointerEvents = "none";
        return;
      }
    }
    axios.get(`http://localhost:8000/user/${profileData._id}`).then((res) => {
      if (!res.data.results[0].units[unit].materials[3].completed) {
        handleAddPoints(profileData._id);
        dispatch(addPoint());
        handleMakeComplete({
          unit_name: `unit-${unit + 1}`,
          material_id: res.data.results[0].units[unit].materials[3]._id,
        });
      }
    });
    document.querySelector(".unit__passed").style.display = "block";
    setTimeout(function () {
      navigate("/language/study/beginner/unit-6/topic/1");
    }, 3000);
  };

  const chooseOption = (index) => (event) => {
    chosenOptions[index] = event.currentTarget.innerText;
    const optionsElems = document.querySelectorAll(".unit__test-answer-option");

    let length = (index + 1) * 4;
    let i = length - 4;

    for (; i < length; i++) {
      optionsElems[i].style.backgroundColor = "#968560";
      optionsElems[i].style.color = "#000";
    }

    event.currentTarget.style.backgroundColor = "#423d33";
    event.currentTarget.style.color = "#fff";
  };

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title" style={{ margin: 0 }}>
          Материалды бекітуге арналған Тест
        </h1>
        <h2 className="unit__container-title" style={{ marginTop: 0 }}>
          (Тест для закрепления материала)
        </h2>
        <div className="unit__test">
          {data[0].units[unit].materials[3].items.map((item, i) => {
            return (
              <div className="unit__test-item">
                <div className="unit__test-question">
                  <h2
                    className="unit__container-description inline"
                    style={{ margin: "0 20px 0 0" }}
                  >
                    {i + 1}.{item.question[1]}:
                  </h2>
                </div>
                <div className="unit__test-answers">
                  {data[0].units[unit].materials[3].items[i].answer_options.map(
                    (option) => {
                      return (
                        <div
                          className="unit__test-answer-option pointer"
                          style={
                            option == ""
                              ? { display: "none" }
                              : { display: "block" }
                          }
                          onClick={chooseOption(i)}
                        >
                          {option}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="unit__passed">
          <h2>Бәрі дұрыс! Жарайсын!</h2>
          <p>(Всё верно! Молодец!)</p>
        </div>
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
            onClick={checkAnswer}
            style={{ marginRight: 20 }}
          >
            Тексеру (Проверить)
          </button>
          <button
            className="button-next"
            onClick={solveAgain}
            style={{ backgroundColor: "#fff", color: "black" }}
          >
            Қайтадан (Заново)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test_Unit6;
