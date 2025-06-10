import React from 'react';
import ProfilePic from "../assets/ProfilePic.png";


const ProfileCard = () => {

  return (
    <>
      <img
        src={ProfilePic}
        alt="Profile"
        className="rounded-full w-64 h-64 object-cover mb-2 border-4 border-green-400"
      />
      <p>QuantTerminal</p>
      <p>created by</p>
      <div className="text-3xl font-bold">Nick Petrykowycz</div>
    </>
  );
};
export default ProfileCard;