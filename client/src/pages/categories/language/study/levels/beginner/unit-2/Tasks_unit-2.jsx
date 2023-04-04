import axios from "axios";
import { useState } from "react";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Tasks_unit2() {
  const profileData = useSelector((state) => state.login.account);

  const [count, setCount] = useState(10);
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

  const checkAnswer = (event) => {
    if (
      data[0].units[1].materials[count].answer == event.currentTarget.innerText
    ) {
      console.log("Right!");
      event.currentTarget.style.backgroundColor = "#0bb90b";
      axios.get(`http://localhost:8000/user/${profileData._id}`).then((res) => {
        if (res.data.results[0].units[0].materials[count].completed == false) {
          handleAddPoints(profileData._id);
          dispatch(addPoint());
          handleMakeComplete({
            unit_name: "unit-1",
            material_id: profileData.results[0].units[0].materials[count]._id,
          });
        }
      });

      setTimeout(function () {
        const elems = document.querySelectorAll(".unit__answers-option");
        length = elems.length;
        for (let i = 0; i < length; i++) {
          elems[i].style.backgroundColor = "#968560";
        }
        if (count == 10) {
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
        <h1 className="unit__container-title">Задание-{count}</h1>
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
            {data[0].units[1].materials[count].title[0]}
          </h2>
        </div>
        <div className="unit__answers">
          {data[0].units[1].materials[count].answer_options.map((option) => {
            return (
              <h4 className="unit__answers-option" onClick={checkAnswer}>
                {option}!
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tasks_unit2;
