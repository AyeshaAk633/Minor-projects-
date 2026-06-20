import React, { useState } from "react";

function NotesApp() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addNote = () => {

    if (note === "") return;

    if (editIndex !== null) {

      const updatedNotes = [...notes];

      updatedNotes[editIndex] = note;

      setNotes(updatedNotes);

      setEditIndex(null);

    } else {

      setNotes([...notes, note]);

    }

    setNote("");
  };

  const editNote = (index) => {

    setNote(notes[index]);

    setEditIndex(index);
  };

  const deleteNote = (index) => {

    const updatedNotes = notes.filter((item, i) => i !== index);

    setNotes(updatedNotes);
  };

  return (
    <div className="card">

      <h2>Notes App</h2>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes"
      />

      <button onClick={addNote}>
        {editIndex !== null ? "Update Note" : "Save Note"}
      </button>

      {notes.map((item, index) => (
        <div key={index}>

          <p>{item}</p>

          <button onClick={() => editNote(index)}>Edit</button>

          <button onClick={() => deleteNote(index)}>Delete</button>

        </div>
      ))}

    </div>
  );
}

export default NotesApp;