import { useState } from 'react';
import EmptyView from './empty';
import Note from './note';

const NoteView = ({ notes, setNotes, currentNote, setCurrentNote }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!currentNote) return <EmptyView />;

  const note = notes.find(({ id }) => id === currentNote);

  return (
    <section className="flex h-full w-full flex-col rounded-r-2xl bg-white">
      <header className="border-tr-2 flex place-content-end gap-2 rounded-tr-2xl border-b border-primary-400 bg-primary-400 p-2 shadow-lg">
        <button
          className="rounded-full border-0 bg-inherit"
          onClick={() => {
            setIsEditing(false);
            setCurrentNote();
          }}
        >
          ❌
        </button>
      </header>
      <Note note={note} setNotes={setNotes} isEditing={isEditing} />
      <footer className="flex place-content-end gap-2 rounded-br-2xl border-2 border-b border-l-0 border-primary-400 bg-primary-50 p-2 shadow-lg">
        <button onClick={() => setIsEditing((x) => !x)}>
          {isEditing ? '💾 Save' : '✍️ Edit'}
        </button>
      </footer>
    </section>
  );
};

export default NoteView;
