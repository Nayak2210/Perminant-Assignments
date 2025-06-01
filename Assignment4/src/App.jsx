import React from "react";
import UserBadge from "./components/UserBadge";
import StatusToggle from "./components/StatusToggle";
import TaskList from "./components/TaskList";
import ProfileViewer from "./components/ProfileViewer";
import "./App.css";

const App = () => {
  return (
    <div className="main-wrapper">
      <h1 className="page-title">🚀 Component Showcase</h1>

      <div className="component-grid">
        <UserBadge name="Rahul" role="Developer" isVerified={true} />
        <UserBadge name="Nikita" role="Designer" isVerified={false} />

        <StatusToggle />
        <TaskList />

        <ProfileViewer
          name="Ravi Kumar"
          email="ravi@example.com"
          isPremiumUser={true}
        />
        <ProfileViewer
          name="Aisha Khan"
          email="aisha@example.com"
          isPremiumUser={false}
        />
      </div>
    </div>
  );
};

export default App;
