import axios from "axios";
import { useState } from "react";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Test_Unit1() {
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

  let answers = data[0].units[0].materials[1].answers;
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
        const optionsElems = document.querySelectorAll(
          ".unit__test-answer-option"
        );
        for (let j = 0; j < optionsElems.length; j++) {
          for (let k = 0; k < chosenOptions.length; k++) {
            if (optionsElems[j].innerText == chosenOptions[k]) {
              optionsElems[j].style.backgroundColor = "#c52026";
              if (optionsElems[j].innerText == answers[k]) {
                optionsElems[j].style.backgroundColor = "#54ad54";
              }
            }
          }
        }
        console.log(chosenOptions);
        document.querySelector(".unit__test").style.pointerEvents = "none";
        return;
      }
    }
    console.log("RIGHT");
    axios.get(`http://localhost:8000/user/${profileData._id}`).then((res) => {
      if (!res.data.results[0].units[0].materials[1].completed) {
        handleAddPoints(profileData._id);
        dispatch(addPoint());
        handleMakeComplete({
          unit_name: "unit-1",
          material_id: "642ff9a67d34e9497b955236",
        });
      }
    });
    document.querySelector(".unit__passed").style.display = "block";
    setTimeout(function () {
      navigate("/language/study/beginner/unit-2/topic/1");
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
    console.log(chosenOptions);
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
          {data[0].units[0].materials[1].items.map((item, i) => {
            return (
              <div className="unit__test-item">
                <div className="unit__test-question">
                  <h2
                    className="unit__container-description inline"
                    style={{ margin: "0 20px 0 0" }}
                  >
                    {i + 1}.{item.question[1]}:
                  </h2>
                  <audio
                    className="unit__container-audio"
                    controls
                    src={`/audio/language/study/levels/beginner/unit-1/task-${
                      i + 1
                    }.ogg`}
                  />
                </div>
                <div className="unit__test-answers">
                  {data[0].units[0].materials[1].items[i].answer_options.map(
                    (option) => {
                      return (
                        <div
                          className="unit__test-answer-option pointer"
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

export default Test_Unit1;
