import React, { useEffect } from "react";
import NoteList from "./Note/NoteList";
import Context from "./context";
import Loader from './Loader';
import Modal from './Modal/Modal';

const AddNote = React.lazy(() => import('./Note/AddNote'))

function App() {
  const [notes, setNotes] = React.useState([
    // { id: 1, completed: false, title: "pay bread" },
    // { id: 2, completed: false, title: "pay milk" },
    // { id: 3, completed: false, title: "pay butter" }
  ]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(notes => {
        setTimeout(() => {
          setNotes(notes);
          setLoading(false);
        }, 2000);
      })
  }, []);

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
      notes.concat([{ title, id: Date.now(), completed: false }])
    );
  }

  return (
    <Context.Provider value={{ removeNote }}>
      <div className="wrapper">
        <h1>Create your notes</h1>
        <Modal />
        <React.Suspense fallback={<Loader />}>
          <AddNote onCreate={addNote} />

        </React.Suspense>
        {loading && <Loader />}
        {notes.length ? (
          <NoteList notes={notes} onToggle={toggleNote} />
        ) : loading ? null : (
          <p>no notes</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
