import React from "react";
import "../App.css";

const UserBadge = ({ name, role, isVerified }) => {
  return (
    <div
      className="component-card"
      style={{ backgroundColor: isVerified ? "#e0f7e9" : "#ffe5e5" }}
    >
      <h2>{name}</h2>
      <p>{role}</p>
      <p className={isVerified ? "verified" : "not-verified"}>
        {isVerified ? "✅ Verified" : "❌ Not Verified"}
      </p>
    </div>
  );
};

export default UserBadge;
