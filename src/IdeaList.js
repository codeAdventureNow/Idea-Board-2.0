import { useState } from 'react';

export default function IdeaList({ ideas, onChangeIdea, onDeleteIdea }) {
  return ideas.map((idea) => (
    <div className='cardList' key={idea.id}>
      <Idea idea={idea} onChange={onChangeIdea} onDelete={onDeleteIdea} />
    </div>
  ));
}

function Idea({ idea, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let ideaContent;

  if (isEditing) {
    ideaContent = (
      <div className='card'>
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
      <div className='card'>
        {idea.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
  return (
    <div className='card'>
      {ideaContent}
      <button onClick={() => onDelete(idea.id)}>Delete</button>
    </div>
  );
}
