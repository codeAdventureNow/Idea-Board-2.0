import React, { Component, useEffect } from 'react';

import './App.css';
import { useState } from 'react';
import AddIdea from './AddIdea';
import IdeaList from './IdeaList';

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [ideaSort, setIdeaSort] = useState('date');

  // useEffect(() => {
  //   localStorage.setItem('ideaSort', JSON.stringify(ideaSort));
  // });

  console.log(ideaSort);
  console.log(ideas);

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
    let newDate = Date(Date.now()).toString();
    setIdeas([
      ...ideas,
      {
        id: nextId++,
        title: '',
        message: '',
        date: newDate.substring(0, newDate.length - 29),
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
        <label className='drop-down'>
          <p style={{ padding: 10 }}>Sort by</p>
          <select
            value={ideaSort}
            onChange={(e) => setIdeaSort(e.target.value)}
          >
            <option value='date'>Date</option>
            <option value='alpha'>A-Z</option>
          </select>
        </label>
      </div>

      <IdeaList
        ideas={ideas}
        onChangeIdea={handleChangeIdea}
        onDeleteIdea={handleDeleteIdea}
      />
    </div>
  );
}
