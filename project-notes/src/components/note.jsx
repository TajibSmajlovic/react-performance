import { lazy, Suspense } from 'react';
import { simulateNetwork } from '../lib/sleep';

const Editing = lazy(() => simulateNetwork(import('./edit')));

const NoteContent = ({ note, setNotes, isEditing }) => {
  if (isEditing)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Editing note={note} setNotes={setNotes} />;
      </Suspense>
    );

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteContent;
