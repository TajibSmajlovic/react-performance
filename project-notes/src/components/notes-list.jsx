import { memo } from 'react';
import clsx from 'clsx';

const NotesList = ({ notes = [], currentNote, setCurrentNote }) => {
  return (
    <section className="h-full w-1/2 overflow-y-scroll rounded-l-2xl border-r border-primary-800 bg-primary-50 md:w-1/4">
      <nav>
        {notes.map((note) => (
          <NoteListItem
            key={note.id}
            note={note}
            setCurrentNote={setCurrentNote}
            isActive={note.id === currentNote}
          />
        ))}
      </nav>
    </section>
  );
};

const NoteListItem = memo(({ note, isActive, setCurrentNote }) => {
  return (
    <a
      href={`#note-${note.id}`}
      className={clsx(
        'block border-b border-primary-400 p-4 last:border-b-0',
        isActive && 'bg-primary-300',
      )}
    >
      <p
        id={`note-${note.id}`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentNote(note.id);
        }}
      >
        <h4 className="text-base">{note.title}</h4>
        <div className="flex flex-col gap-2">
          <p className="text-primary-800">{note.status}</p>
          <p className="rounded-lg bg-primary-200 text-center text-primary-900 shadow-md">
            {note.priority}
          </p>
        </div>
      </p>
    </a>
  );
});

export default NotesList;
