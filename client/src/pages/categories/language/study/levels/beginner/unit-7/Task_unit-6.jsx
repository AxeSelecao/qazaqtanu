import axios from "axios";
import {
  useGetUnitsQuery,
  useAddPointsMutation,
  useMakeCompleteMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Task_Unit7({ unit }) {
  let { num } = useParams();
  const profileData = useSelector((state) => state.login.account);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  if (num == 1) {
    let answers = data[0].units[unit].materials[1].answers;
    console.log(answers); // это ответы

    return (
      <div className="unit">
        <div className="unit__container">
          <h1 className="unit__container-title" style={{ margin: 0 }}>
            Тапсырма-{num} (задание)
          </h1>
          <div className="unit__task">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);

                let count = 0;
                for (let key in data) {
                  if (data[key].toLowerCase() != answers[count]) {
                    return;
                  }
                  count++;
                  if (count == answers.length) {
                    break;
                  }
                }
                axios
                  .get(`http://localhost:8000/user/${profileData._id}`)
                  .then((res) => {
                    if (
                      !res.data.results[0].units[unit].materials[1].completed
                    ) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: `unit-${unit + 1}`,
                        material_id:
                          res.data.results[0].units[unit].materials[1]._id,
                      });
                    }
                  });
                console.log(data);
                document.querySelector(".unit__passed").style.display = "block";
                setTimeout(function () {
                  reset();
                  document.querySelector(".unit__passed").style.display =
                    "none";
                  navigate(`/language/study/beginner/unit-${unit + 1}/task/2`);
                }, 3000);
              })}
            >
              {data[0].units[unit].materials[1].items.map((item, i) => {
                return (
                  <div style={{ fontSize: 20, marginTop: 20 }}>
                    <h3 style={{ display: "inline" }}>
                      {i + 1}. {item.sentence[0]}:{" "}
                      <input
                        {...register(`task-${i + 1}`)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          borderBottom: "1px solid black",
                          width: 130,
                          outline: "none",
                          fontSize: 22,
                          fontFamily: "serif",
                          fontWeight: 700,
                        }}
                      />{" "}
                    </h3>
                  </div>
                );
              })}
              <div className="unit__passed" style={{ marginTop: 20 }}>
                <h2>Бәрі дұрыс! Жарайсын!</h2>
                <p>(Всё верно! Молодец!)</p>
              </div>
              <input
                className="button-next"
                type="submit"
                value="Тексеру (Проверить)"
                style={{ marginTop: 30 }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (num == 2) {
    let answers = data[0].units[unit].materials[2].answers;
    console.log(answers);

	 return (
      <div className="unit">
        <div className="unit__container">
          <h1 className="unit__container-title" style={{ margin: 0 }}>
            Тапсырма-{num} (задание)
          </h1>
          <div className="unit__task">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);

                let count = 0;
                for (let key in data) {
                  if (data[key].toLowerCase() != answers[count]) {
                    return;
                  }
                  count++;
                  if (count == answers.length) {
                    break;
                  }
                }
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
                console.log(data);
                document.querySelector(".unit__passed").style.display = "block";
                setTimeout(function () {
                  reset();
                  document.querySelector(".unit__passed").style.display =
                    "none";
                  navigate(`/language/study/beginner/unit-${unit + 1}/task/2`);
                }, 3000);
              })}
            >
              {data[0].units[unit].materials[2].items.map((item, i) => {
                return (
                  <div style={{ fontSize: 20, marginTop: 20 }}>
                    <h3 style={{ display: "inline" }}>
                      {i + 1}. {item.sentence[0]}:{" "}
                      <input
                        {...register(`task-${i + 1}`)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          borderBottom: "1px solid black",
                          width: 130,
                          outline: "none",
                          fontSize: 22,
                          fontFamily: "serif",
                          fontWeight: 700,
                        }}
                      />{" "}
                    </h3>
                  </div>
                );
              })}
              <div className="unit__passed" style={{ marginTop: 20 }}>
                <h2>Бәрі дұрыс! Жарайсын!</h2>
                <p>(Всё верно! Молодец!)</p>
              </div>
              <input
                className="button-next"
                type="submit"
                value="Тексеру (Проверить)"
                style={{ marginTop: 30 }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Task_Unit7;
