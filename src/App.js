import React, { Component, useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [ideaSort, setIdeaSort] = useState();

  console.log(ideaSort);

  useEffect(() => {
    if (ideaSort === 'alpha') {
      const sortAlphabetic = () =>
        [...ideas].sort(function (a, b) {
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
      setIdeas(sortAlphabetic);
    } else if (ideaSort === 'date') {
      const sortDate = () =>
        [...ideas].sort(function (a, b) {
          const dateA = a.date;
          const dateB = b.date;

          if (dateA < dateB) {
            return -1;
          }

          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
      setIdeas(sortDate);
    }
  }, [ideaSort]);

  function handleAddIdea() {
    let nextId = Math.floor(Math.random() * 1000);
    setIdeas([
      ...ideas,
      {
        id: nextId++,
        title: '',
        message: '',
        date: Date.now(),
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
        Sort
        <select value={ideaSort} onChange={(e) => setIdeaSort(e.target.value)}>
          <option value='date'>Created</option>
          <option value='alpha'>Alphabetical</option>
        </select>
      </label>
      <IdeaList
        ideas={ideas}
        onChangeIdea={handleChangeIdea}
        onDeleteIdea={handleDeleteIdea}
      />
    </div>
  );
}
