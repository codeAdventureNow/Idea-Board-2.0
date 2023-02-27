import { useState } from 'react';

// export default function IdeaList({ ideas, onChangeIdea, onDeleteIdea }) {
//   return ideas.map((idea) => (
//     <div className='cardList' key={idea.id}>
//       <Idea idea={idea} onChange={onChangeIdea} onDelete={onDeleteIdea} />

//     </div>
//   ));
// }

export default function IdeaList({ ideas, onChangeIdea, onDeleteIdea }) {
  return (
    <div className='cardList'>
      {ideas.map((idea) => (
        <Idea
          key={idea.id}
          idea={idea}
          onChange={onChangeIdea}
          onDelete={onDeleteIdea}
        />
      ))}
    </div>
  );
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
        <button
          className='tileButton save-button'
          onClick={() => setIsEditingTitle(false)}
        >
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
          maxlength='140'
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
        <p className='tileMessage'>{idea.message}</p>
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
      <div className='delete-section'>
        <button className='delete-button' onClick={() => onDelete(idea.id)}>
          x
        </button>
      </div>
      <div className='tileBottom'>
        {ideaTitle}
        {messageContent}
      </div>
    </div>
  );
}
