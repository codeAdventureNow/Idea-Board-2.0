import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';

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
    return [
      ...ideas,
      {
        id: nextId++,
        text: '',
        message: '',
      },
    ];
  }

  return (
    <div className='app'>
      <div className='heading'>
        <h1>Idea Board</h1>
      </div>

      <AddIdea onAddIdea={handleAddIdea} />
      <IdeaList />
      <div className='cardList'>
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
      </div>
    </div>
  );
}
