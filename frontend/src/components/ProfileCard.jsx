import React from "react";
import ProfilePic from "../assets/ProfilePic.png";

export default function ProfileCard({
  className = "",
  imageSize = "w-32 h-32",
  nameSize = "text-3xl",
  locationSize = "text-lg",
  creatorSize = "text-sm",
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${nameSize} font-bold mb-1`}>QUANT TERMINAL V1.0</div>
      <div className={`mb-3 ${creatorSize} text-green-400 opacity-80 text-center`}>
        Created by Nick Petrykowycz
      </div>
      <img
        src={ProfilePic}
        alt="Profile"
        // Use rounded-2xl or rounded-3xl for nicely rounded square corners
        className={`rounded-4xl ${imageSize} object-cover border-4 border-green-400 shadow-lg mb-3`}
      />
      <div className={`${locationSize} flex items-center gap-2 text-green-300 mb-3`}>
        Sydney, Australia
      </div>
      {/* Longer, more visible divider */}
      <hr className="w-[100%] border-1 border-green-500 opacity-80 my-3" />
    </div>
  );
}
