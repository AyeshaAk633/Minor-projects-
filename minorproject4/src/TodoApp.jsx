import React, { useState } from "react";

function TodoApp() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (task === "") return;

    const newTask = {
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  const completeTask = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((item, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="card">

      <h2>To-Do App</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <div key={index}>

          <p
            onClick={() => completeTask(index)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {item.text}
          </p>

          <button onClick={() => deleteTask(index)}>Delete</button>

        </div>
      ))}

    </div>
  );
}

export default TodoApp;