import React, { useState } from "react";
import "../App.css";

const StatusToggle = () => {
  const [status, setStatus] = useState("Online");

  return (
    <div
      className={`component-card ${
        status === "Online" ? "status-online" : "status-offline"
      }`}
    >
      <h2>Status: {status}</h2>
      <p style={{ fontSize: "24px" }}>{status === "Online" ? "🟢" : "🔴"}</p>
      <button
        onClick={() =>
          setStatus((prev) => (prev === "Online" ? "Offline" : "Online"))
        }
        style={{
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default StatusToggle;
