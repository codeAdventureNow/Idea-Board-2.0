import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [sortState, setSortState] = useState('none');

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a > b ? 1 : -1) },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

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
      <div>
        <p>Sort Alphabetically</p>
        <select
          defaultValue={'DEFAULT'}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option value='DEFAULT' disabled>
            None
          </option>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
      </div>
      <IdeaList
        sortMethods={sortMethods}
        sortState={sortState}
        ideas={ideas}
        onChangeIdea={handleChangeIdea}
        onDeleteIdea={handleDeleteIdea}
      />
    </div>
  );
}
