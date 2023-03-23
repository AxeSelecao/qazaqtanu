import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn, setAccount } from "../../services/redux/slice";
import { useGetUsersQuery } from "../../services/redux/API/usersAPI";
import PhoneInput from "react-phone-number-input";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { data = {}, isLoading } = useGetUsersQuery();

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const navigate = useNavigate();

  return (
    <div className="signin">
      <form
        className="signin__form"
        onSubmit={handleSubmit((formData) => {
          console.log(formData);
          if (data != null) {
            data.map((user) => {
              if (
                user.phone == formData.phone &&
                user.password == formData.password
              ) {
                navigate("/");
                dispatch(logIn());
                dispatch(setAccount(user));
              }
            });
          }
        })}
      >
        <h1>Kiru</h1>
        <br />
        <h3>Telefon nömiri:</h3>
        <PhoneInput
          placeholder="Enter phone number"
          {...register("phone", { required: true })}
          value={value}
          onChange={setValue}
        />
        <h3>Qūpia söz:</h3>
        <input {...register("password")} type="password" />
        <br />
        <button type="submit">Kiru</button>
      </form>
    </div>
  );
};
