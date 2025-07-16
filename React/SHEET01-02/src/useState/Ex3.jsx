import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function sendTask() {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function deleteTask() {
    const indexToDelete = tasks.findIndex((t) => t === task);
    if (indexToDelete !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(indexToDelete, 1);
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={sendTask}>Add</button>
        <button onClick={deleteTask}>Delete</button>
      </div>

      <ul id="List">
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
