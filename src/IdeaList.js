import { useState } from 'react';
import { useRef, useEffect } from 'react';

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
  const [isEditingMessage, setIsEditingMessage] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(true);

  let ideaTitle;
  let messageContent;

  // useEffect(() => {
  //   localStorage.setItem('idea', JSON.stringify(idea));
  // });

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  if (isEditingTitle) {
    let newDate = Date(Date.now()).toString();
    ideaTitle = (
      <div className='tileTop'>
        <input
          type='text'
          ref={inputReference}
          value={idea.title}
          onChange={(e) => {
            onChange({
              ...idea,
              title: e.target.value,
              date: newDate.substring(0, newDate.length - 29),
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
        <p className='timeStamp'>{idea.date}</p>
        <p>{idea.title}</p>

        <button className='tileButton' onClick={() => setIsEditingTitle(true)}>
          Edit Title
        </button>
      </div>
    );
  }

  if (isEditingMessage) {
    let newDate = Date(Date.now()).toString();
    messageContent = (
      <div className='tileTop'>
        <textarea
          maxLength='140'
          value={idea.message}
          onChange={(e) => {
            onChange({
              ...idea,
              message: e.target.value,
              date: newDate.substring(0, newDate.length - 29),
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
