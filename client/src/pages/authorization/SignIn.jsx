import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../services/redux/slice";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  return (
    <div className="signin">
      <form
        className="signin__form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>Kiru</h1>
        <br />
        <h3>Telefon nömiri:</h3>
        <input {...register("phone-number")} type="tel" />
        <h3>Qūpia söz:</h3>
        <input {...register("password")} type="password" />
        <br />
        <NavLink to={"/"}>
          <button type="submit" onClick={() => dispatch(logIn())}>
            Kiru
          </button>
        </NavLink>
      </form>
    </div>
  );
};
