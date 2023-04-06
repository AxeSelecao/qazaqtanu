import axios from "axios";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Tasks_unit3() {
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
  console.log(data[0].units[2].materials[num].answer_options)

  const checkAnswer = (event) => {
    if (
      data[0].units[2].materials[num].answer == event.currentTarget.innerText
    ) {
      console.log("Right!");
      event.currentTarget.style.backgroundColor = "#0bb90b";
      axios.get(`http://localhost:8000/user/${profileData._id}`).then((res) => {
        if (res.data.results[0].units[2].materials[num].completed == false) {
          handleAddPoints(profileData._id);
          dispatch(addPoint());
          handleMakeComplete({
            unit_name: "unit-3",
            material_id: profileData.results[0].units[2].materials[num]._id,
          });
        }
      });

      setTimeout(function () {
        const elems = document.querySelectorAll(".unit__answers-option");
        length = elems.length;
        for (let i = 0; i < length; i++) {
          elems[i].style.backgroundColor = "#968560";
        }
        if (num == 16) {
          navigate("/language/study/beginner/unit-4/topic/1");
        } else if (num < 16) {
          navigate(`/language/study/beginner/unit-3/task/${Number(num) + 1}`);
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
        <h1 className="unit__container-title">Задание</h1>
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
            {data[0].units[2].materials[num].title[0]}
          </h2>
        </div>
        <div className="unit__answers">
          {data[0].units[2].materials[num].answer_options.map((option) => {
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

export default Tasks_unit3;
