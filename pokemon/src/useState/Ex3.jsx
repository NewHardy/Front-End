import React, { useState } from "react";

function toDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function sendTask() {
    if (task !== "") {
      setTasks([...tasks, task]);
    }
  }
  function deleteTask() {
    const indexToDelete = tasks.findIndex((t) => t === task);
    const updatedTasks = [...tasks];
    updatedTasks.splice(indexToDelete, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={sendTask}>Add</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
      <ul id="List"></ul>
    </div>
  );
}

export default toDoList;
