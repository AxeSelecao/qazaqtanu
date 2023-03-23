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
        <h1>Tirkelu</h1>
        <br />
        <h3>Esim:</h3>
        <input {...register("name", { required: true })} type="text" />
        <h3>Jasy:</h3>
        <input {...register("age", { required: true })} type="number" />
        <h3>Telefon nömiri:</h3>
        <PhoneInput
          placeholder="Enter phone number"
          {...register("phone", { required: true })}
          value={value}
          onChange={setValue}
        />
        <h3>Qūpia söz:</h3>
        <input {...register("password", { required: true })} type="text" />
        <br />
        <button type="submit">Tirkelu</button>
      </form>
    </div>
  );
};
