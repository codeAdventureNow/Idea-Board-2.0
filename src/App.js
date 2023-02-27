import React, { Component } from 'react';
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className='app'>
      <div className='heading'>
        <h1>Idea Board</h1>
      </div>

      <div className='button'>
        <button>New Idea</button>
      </div>
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
