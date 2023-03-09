import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [alphabeticalToggle, setAlphabeticalToggle] = useState(false);
  console.log(ideas);

  let alphabeticalSorting = [...ideas].sort(function (a, b) {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // console.log(alphabeticalSorting);

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
      <label className='drop-down'>
        Alphabetical
        <select
          value={alphabeticalToggle}
          onChange={(e) => setAlphabeticalToggle(e.target.value)}
        >
          <option disabled value='false'>
            Unsorted
          </option>
          <option value='true'>Alphabetical</option>
        </select>
      </label>
      <IdeaList
        ideas={alphabeticalToggle ? alphabeticalSorting : ideas}
        onChangeIdea={handleChangeIdea}
        onDeleteIdea={handleDeleteIdea}
      />
    </div>
  );
}
