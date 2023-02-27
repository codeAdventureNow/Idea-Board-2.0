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
      <div className='tileTop'>
        <input
          value={idea.title}
          onChange={(e) => {
            onChange({
              ...idea,
              title: e.target.value,
            });
          }}
        />
        <button className='tileButton' onClick={() => setIsEditingTitle(false)}>
          Save Title
        </button>
      </div>
    );
  } else {
    ideaTitle = (
      <div className='tileTop'>
        <p className='title'>{idea.title}</p>
        <button className='tileButton' onClick={() => setIsEditingTitle(true)}>
          Edit Title
        </button>
      </div>
    );
  }

  if (isEditingMessage) {
    messageContent = (
      <div className='tileTop'>
        <textarea
          value={idea.message}
          onChange={(e) => {
            onChange({
              ...idea,
              message: e.target.value,
            });
          }}
        ></textarea>
        <button
          className='tileButton'
          onClick={() => setIsEditingMessage(false)}
        >
          Save Message
        </button>
      </div>
    );
  } else {
    messageContent = (
      <div className='tileTop'>
        <p>{idea.message}</p>
        <button
          className='tileButton'
          onClick={() => setIsEditingMessage(true)}
        >
          Edit Message
        </button>
      </div>
    );
  }
  return (
    <div className='card'>
      {ideaTitle}
      {messageContent}
      <button className='tileButton' onClick={() => onDelete(idea.id)}>
        Delete
      </button>
    </div>
  );
}
