import React from "react";
import "./App.css";
import TodoApp from "./TodoApp";
import NotesApp from "./NotesApp";

function App() {

  const title = "To-Do & Notes App";

  return (
    <div className="container">

      <h1>{title}</h1>

      <TodoApp />

      <NotesApp />

    </div>
  );
}

export default App;