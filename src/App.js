import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([
    {
      id: 0,
      title: '',
      message: '',
    },
  ]);

  function handleAddIdea() {
    let nextId = Math.floor(Math.random() * 100);
    setIdeas([
      ...ideas,
      {
        id: nextId++,
        title: '',
        message: '',
      },
    ]);
  }

  //not sure what to put as the second operand after === where ideas.id is located
  function handleChangeIdea(idea) {
    setIdeas(
      ideas.map((i) => {
        if (i.id === idea.id) {
          return idea;
        } else {
          return i;
        }
      })
    );
  }

  //not sure what to put as the second operand after === where ideas.id is located
  function handleDeleteIdea(idea) {
    setIdeas(ideas.filter((i) => i.id !== idea));
  }

  return (
    <div className='app'>
      <div className='heading'>
        <h1>Idea Board</h1>
      </div>

      <AddIdea onAddIdea={handleAddIdea} />
      <IdeaList
        ideas={ideas}
        onChangeIdea={handleChangeIdea}
        onDeleteIdea={handleDeleteIdea}
      />
      {/* <div className='cardList'>
        <div className='card'>
          <div>
            <input className='tileTitle' type='text' />
            <button className='tileButton'>x</button>
          </div>
          <input className='tileBody' type='text' />
        </div>
        <div className='card'>
          <div>
            <input className='tileTitle' type='text' />
            <button className='tileButton'>x</button>
          </div>
          <input className='tileBody' type='text' />
        </div>
      </div> */}
    </div>
  );
}
