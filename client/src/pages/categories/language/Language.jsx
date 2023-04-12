import alphabetIcon from "../../../assets/icons/alphabet.svg";
import grammarIcon from "../../../assets/icons/grammar.svg";
import studyIcon from "../../../assets/icons/study.svg";
import videoChatIcon from "../../../assets/icons/video-chat.svg";
import speakingClubsIcon from "../../../assets/icons/speaking-clubs.svg";
import { NavLink } from "react-router-dom";

export const Language = () => {
  return (
    <div className="section">
      <div className="section__container">
        <h1>Язык</h1>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <NavLink
            className="navlink"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            to={"/language/alphabet"}
          >
            <img
              className="section__container-category"
              src={alphabetIcon}
              alt="alphabet icon"
            />
            <h2>Алфавит</h2>
          </NavLink>
			 <NavLink
            className="navlink"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            to={"/language/study"}
          >
            <img
              className="section__container-category"
              src={studyIcon}
              alt="study icon"
            />
            <h2>Обучение</h2>
          </NavLink>
          <NavLink
            className="navlink"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            to={""}
          >
            <img
              className="section__container-category"
              src={grammarIcon}
              alt="grammar icon"
            />
            <h2>Грамматика</h2>
          </NavLink>
          
          {/*<NavLink
            className="navlink"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            to={""}
          >
            <img
              className="section__container-category"
              src={videoChatIcon}
              alt="video chat icon"
            />
            <h2>Видео-чат</h2>
          </NavLink>
          <NavLink
            className="navlink"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            to={""}
          >
            <img
              className="section__container-category"
              src={speakingClubsIcon}
              alt="speaking club icon"
            />
            <h2>Разговорные клубы</h2>
          </NavLink>*/}
        </div>
      </div>
    </div>
  );
};
