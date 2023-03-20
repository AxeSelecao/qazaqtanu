import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  
  return (
    <div className="signup">
      <form
        className="signup__form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>Tirkelu</h1>
        <br />
        <h3>Esim:</h3>
        <input {...register("name")} type="text" />
        <h3>Jasy:</h3>
        <input {...register("birthdate")} type="date" />
        <h3>Telefon nömiri:</h3>
        <input {...register("phone-number")} type="tel" />
        <h3>Qūpia söz:</h3>
        <input {...register("password")} type="text" />
        <br />
        <NavLink to={'/authorization'}>
          <button type="submit">Tirkelu</button>
        </NavLink>
      </form>
    </div>
  );
};
