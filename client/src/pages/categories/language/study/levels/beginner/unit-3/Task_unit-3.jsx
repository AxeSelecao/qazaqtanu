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
import { useForm } from "react-hook-form";

function Task_Unit3() {
  let { num } = useParams();
  const profileData = useSelector((state) => state.login.account);

  const {
    register,
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

  let answers = data[0].units[2].materials[2].answers;
  console.log(answers);

  return (
    <div className="unit">
      <div className="unit__container">
        <h1 className="unit__container-title" style={{ margin: 0 }}>
          Тапсырма-{num} (задание)
        </h1>
        <h2 className="unit__container-title" style={{ marginTop: 20 }}>
          {data[0].units[2].materials[2].title[1]}
        </h2>
        <div className="unit__task">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);

              let count = 0;
              for (let key in data) {
                if (data[key] != answers[count]) {
                  return;
                }
                count++;
              }
              axios
                .get(`http://localhost:8000/user/${profileData._id}`)
                .then((res) => {
                  if (!res.data.results[0].units[2].materials[2].completed) {
                    handleAddPoints(profileData._id);
                    dispatch(addPoint());
                    handleMakeComplete({
                      unit_name: "unit-3",
                      material_id: "643337ffa904b8f5573e2422",
                    });
                  }
                });
              console.log(data);
              document.querySelector(".unit__passed").style.display = "block";
              setTimeout(function () {
                navigate("/language/study/beginner/unit-4/topic/1");
              }, 3000);
            })}
          >
            {data[0].units[2].materials[2].items.map((item, i) => {
              return (
                <div style={{ fontSize: 20, marginTop: 20 }}>
                  <h3 style={{ display: "inline" }}>
                    {i + 1}. {item.sentence[0]}
                  </h3>
                  <input
                    {...register(`task-${i + 1}`)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: "1px solid black",
                      width: 80,
                      outline: "none",
                      fontSize: 22,
                      fontFamily: "serif",
                      fontWeight: 700,
                    }}
                  />
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

export default Task_Unit3;
