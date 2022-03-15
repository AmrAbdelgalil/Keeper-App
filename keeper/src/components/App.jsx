import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  function DeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            onDelete={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
