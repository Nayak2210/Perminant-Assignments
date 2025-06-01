import React, { useState } from "react";
import "../App.css";

const ProfileViewer = ({ name, email, isPremiumUser }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="component-card profile-card">
      <button
        onClick={() => setVisible((v) => !v)}
        style={{ backgroundColor: "#4f46e5", color: "white" }}
      >
        {visible ? "Hide" : "Show"} Profile
      </button>

      {visible && (
        <>
          <h3 style={{ marginTop: "10px" }}>{name}</h3>
          <p>{email}</p>
          <p style={{ fontWeight: "bold", color: "#1e3a8a" }}>
            {isPremiumUser ? "🌟 Premium Member" : "🔒 Upgrade to Premium"}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileViewer;
