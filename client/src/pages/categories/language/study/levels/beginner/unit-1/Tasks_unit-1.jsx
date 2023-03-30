import { useState } from "react";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import task1Audio from "../../../../../../../assets/sounds/beginner/unit-1/tasks/task-1.mp3";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Tasks_unit1() {
  const profileData = useSelector((state) => state.login.account);
  //  console.log(profileData._id);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addPoints, isError] = useAddPointsMutation();

  const handleAddPoints = async (data) => {
    await addPoints(data).unwrap();
  };

  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const checkAnswer = (event) => {
    if (
      data[0].units[0].materials[count].answer == event.currentTarget.innerText
    ) {
      console.log("Right!");
      event.currentTarget.style.backgroundColor = "#0bb90b";
      handleAddPoints(profileData._id);
      dispatch(addPoint());
      setTimeout(function () {
        const elems = document.querySelectorAll(".unit__answers-option");
        length = elems.length;
        for (let i = 0; i < length; i++) {
          elems[i].style.backgroundColor = "#968560";
        }
        if (count == 30) {
          navigate("/language/study/beginner/unit-2");
        } else if (count < 30) {
          setCount(count + 1);
        }
      }, 2000);
    } else {
      console.log("Wrong!");
      event.currentTarget.style.backgroundColor = "#a62a1c";
    }
  };

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title">Тапсырма-{count}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            className="unit__container-description inline"
            style={{ margin: "0 20px 0 0" }}
          >
            {data[0].units[0].materials[1].title[0]}
          </h2>
          <audio className="unit__container-audio" controls src={task1Audio} />
        </div>
        <div className="unit__answers">
          {data[0].units[0].materials[count].answer_options.map((option) => {
            return (
              <h4 className="unit__answers-option" onClick={checkAnswer}>
                {option}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tasks_unit1;
