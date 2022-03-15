import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  function createNote(noteItem) {
    return (
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  }

  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
