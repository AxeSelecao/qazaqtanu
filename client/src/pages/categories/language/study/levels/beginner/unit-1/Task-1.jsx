import { useGetUnitsQuery } from "../../../../../../../services/redux/API/usersAPI";
import task1Audio from "../../../../../../../assets/sounds/beginner/unit-1/task-1/task-1.mp3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Task1() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const checkAnswer = (event) => {
    if (data[0].materials[1].answer == event.currentTarget.innerText) {
      console.log("Right");
      event.currentTarget.style.backgroundColor = "green";
      setTimeout(function () {
        navigate("/language/study/beginner/unit-1/task-2");
      }, 2000);
    } else {
      console.log("Wrong");
      event.currentTarget.style.backgroundColor = "salmon";
      //event.currentTarget.style.backgroundColor = "#978661b6";
    }
  };

  return (
    <div className="tasks unit" style={{}}>
      <div style={{ width: "70%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h2 style={{ display: "inline", marginRight: 20 }}>
            {data[0].materials[1].description}
          </h2>
          <audio controls src={task1Audio} />
        </div>
        <div className="tasks__answers">
          {data[0].materials[1].answer_options.map((option) => {
            return (
              <h4 className="tasks__answers-option" onClick={checkAnswer}>
                {option}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Task1;
