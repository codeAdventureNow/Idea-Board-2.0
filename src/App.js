import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([]);

  function handleAddIdea() {
    let nextId = Math.floor(Math.random() * 1000);
    setIdeas([
      ...ideas,
      {
        id: nextId++,
        title: '',
        message: '',
      },
    ]);
  }

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
    </div>
  );
}
