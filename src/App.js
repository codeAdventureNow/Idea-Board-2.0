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

  let nextId = 1;

  function handleAddIdea() {
    setIdeas([
      ...ideas,
      {
        id: nextId++,
        text: '',
        message: '',
      },
    ]);
  }

  //not sure what to put as the second operand after === where ideas.id is located
  function handleChangeIdea() {
    return ideas.map((i) => {
      if (i.id === ideas.id) {
        return ideas;
      } else {
        return i;
      }
    });
  }

  //not sure what to put as the second operand after === where ideas.id is located
  function handleDeleteIdea() {
    return ideas.filter((i) => i.id !== ideas.id);
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
