import { useState } from 'react';

export default function IdeaList({ ideas, onChangeIdea, onDeleteIdea }) {
  return ideas.map((idea) => (
    <div key={idea.id}>
      <Idea idea={idea} onChange={onChangeIdea} onDelete={onDeleteIdea} />
    </div>
  ));
}

function Idea({ idea, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let ideaContent;

  if (isEditing) {
    ideaContent = (
      <div>
        <input
          value={idea.title}
          onChange={(e) => {
            onChange({
              ...idea,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    ideaContent = (
      <div>
        {idea.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <>
      {ideaContent}
      <button onClick={() => onDelete(idea.id)}>Delete</button>
    </>
  );
}
