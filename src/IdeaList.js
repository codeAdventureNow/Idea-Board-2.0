import { useState } from 'react';

export default function IdeaList({ ideas, onChangeIdea, onDeleteIdea }) {
  return ideas.map((idea) => (
    <div className='cardList' key={idea.id}>
      <Idea idea={idea} onChange={onChangeIdea} onDelete={onDeleteIdea} />
    </div>
  ));
}

function Idea({ idea, onChange, onDelete }) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingMessage, setIsEditingMessage] = useState(false);

  let ideaTitle;
  let messageContent;

  if (isEditingTitle) {
    ideaTitle = (
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
        <button onClick={() => setIsEditingTitle(false)}>Save Title</button>
      </div>
    );
  } else {
    ideaTitle = (
      <div className='card'>
        <p className='title'>{idea.title}</p>
        <button onClick={() => setIsEditingTitle(true)}>Edit Title</button>
      </div>
    );
  }

  if (isEditingMessage) {
    messageContent = (
      <div className='card'>
        <textarea
          value={idea.message}
          onChange={(e) => {
            onChange({
              ...idea,
              message: e.target.value,
            });
          }}
        ></textarea>
        <button onClick={() => setIsEditingMessage(false)}>Save Message</button>
      </div>
    );
  } else {
    messageContent = (
      <div className='card'>
        <p>{idea.message}</p>
        <button onClick={() => setIsEditingMessage(true)}>Edit Message</button>
      </div>
    );
  }
  return (
    <div className='card'>
      {ideaTitle}
      {messageContent}
      <button onClick={() => onDelete(idea.id)}>Delete</button>
    </div>
  );
}
