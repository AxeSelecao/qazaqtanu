import avatar from "../assets/images/header/avatar.jpg";

import { useSelector } from "react-redux";

export const Profile = () => {
  const profileData = useSelector((state) => state.login.account);
  console.log(profileData);
  return (
    <div className="profile">
      <div className="profile__container">
        <div>
          <img className="profile__container-avatar" src={avatar} alt="" />
          <h1>{profileData.name}</h1>
        </div>
        <br />
        <h3>Жасы: {profileData.age}</h3>
        <br />
        <h3>Телефон нөмірі: {profileData.phone}</h3>
        <br />
        <h3>Тілдің деңгейі: </h3>
      </div>
    </div>
  );
};
