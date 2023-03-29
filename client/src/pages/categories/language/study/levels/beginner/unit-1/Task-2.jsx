import { useGetUnitsQuery } from "../../../../../../../services/redux/API/usersAPI";
import task2Audio from "../../../../../../../assets/sounds/beginner/unit-1/task-2/task-2.mp3";

function Task2() {
  const { data = {}, isLoading } = useGetUnitsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const checkAnswer = (event) => {
    if (data[0].materials[2].answer == event.currentTarget.innerText) {
      console.log("Right");
      event.currentTarget.style.backgroundColor = "green";
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
            {data[0].materials[2].description}
          </h2>
          <audio controls src={task2Audio} />
        </div>
        <div className="tasks__answers">
          {data[0].materials[2].answer_options.map((option) => {
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

export default Task2;
