import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useGetUsersQuery,
  useAddUserMutation,
} from "../../services/redux/API/usersAPI";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { data = {}, isLoading } = useGetUsersQuery();
  //  console.log(data);
  const [addUser, isError] = useAddUserMutation();
  const navigate = useNavigate();

  const handleAddUser = async (data) => {
    await addUser(data).unwrap();
  };

  const [value, setValue] = useState();

  return (
    <div className="signup">
      <form
        className="signup__form"
        onSubmit={handleSubmit((formData) => {
          console.log(formData);

          handleAddUser(formData);
          if (data != null) {
            data.map((user) => {
              if (user.phone != formData.phone) {
                navigate("/authorization");
              }
            });
          }
        })}
      >
        <h1 style={{ textAlign: "center" }}>Тіркелу</h1>
        <br />
        <h3>Есім:</h3>
        <input {...register("name", { required: true })} type="text" />
        <br />
        <br />
        <h3>Жасы:</h3>
        <input {...register("age", { required: true })} type="number" />
        <br />
        <br />
        <h3>Телефон нөмірі:</h3>
        <PhoneInput
          placeholder="Enter phone number"
          {...register("phone", { required: true })}
          value={value}
          onChange={setValue}
          style={{ width: 240 }}
        />
        <br />
        <br />
        <h3>Құпия сөз:</h3>
        <input {...register("password", { required: true })} type="text" />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: 80, fontSize: 16 }} type="submit">
            Тіркелу
          </button>
        </div>
      </form>
    </div>
  );
};
