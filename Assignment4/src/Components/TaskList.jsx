import React, { useState } from "react";
import "../App.css";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="component-card task-card">
      <h2>📋 Task Manager</h2>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask} style={{ backgroundColor: "#22c55e", color: "white" }}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, idx) => (
          <li key={idx}>
            {t}{" "}
            <button
              onClick={() => deleteTask(idx)}
              style={{ backgroundColor: "#ef4444", color: "white", marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
