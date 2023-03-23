import { NavLink } from "react-router-dom";

export const Language = () => {
  return (
    <div className="section">
      <div className="section__container">
        <h1>Til</h1>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <NavLink className="navlink" to={"/language/alphabet"}>
            <h2>Álippe</h2>
          </NavLink>
          <NavLink className="navlink" to={""}>
            <h2>Grammatika</h2>
          </NavLink>
          <NavLink className="navlink" to={""}>
            <h2>Oqu</h2>
          </NavLink>
          <NavLink className="navlink" to={""}>
            <h2>Video-chat</h2>
          </NavLink>
          <NavLink className="navlink" to={""}>
            <h2>Áńgimelesý klýbtary</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
