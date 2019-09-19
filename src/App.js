import React from "react";
import NoteList from "./Note/NoteList";
import AddNote from "./Note/AddNote";
import Context from "./context";

function App() {
  const [notes, setNotes] = React.useState([
    // { id: 1, completed: false, title: "pay bread" },
    // { id: 2, completed: false, title: "pay milk" },
    // { id: 3, completed: false, title: "pay butter" }
  ]);

  function toggleNote(id) {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.completed = !note.completed;
        }
        return note;
      })
    );
  }

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function addNote(title) {
    setNotes(
      notes.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  return (
    <Context.Provider value={{ removeNote }}>
      <div className="wrapper">
        <h1>Create your notes</h1>
        <AddNote onCreate={addNote} />
        {notes.length ? (
          <NoteList notes={notes} onToggle={toggleNote} />
        ) : (
          <p>no notes</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
