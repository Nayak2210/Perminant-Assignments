import React from "react";
import UserBadge from "../components/UserBadge";
import StatusToggle from "../components/StatusToggle";
import TaskList from "../components/TaskList";
import ProfileViewer from "../components/ProfileViewer";
import "../App.css";

const Showcase = () => {
  return (
    <div className="component-grid">
      <UserBadge name="Rahul Nayak" role="Developer" isVerified={true} />
      <UserBadge name="Riya Sharma" role="Designer" isVerified={false} />

      <StatusToggle />

      <TaskList />

      <ProfileViewer
        name="Sneha Kapoor"
        email="sneha@example.com"
        isPremiumUser={true}
      />
      <ProfileViewer
        name="Ravi Mehta"
        email="ravi@example.com"
        isPremiumUser={false}
      />
    </div>
  );
};

export default Showcase;
