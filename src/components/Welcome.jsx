import React from "react";

const Welcome = () => {
  const username = localStorage.getItem("userName");
  return (
    <div className="welcome">
      Welcome <span>{username}</span>
    </div>
  );
};

export default Welcome;
