import { useState } from 'react';

export default function AddIdea({ onAddIdea }) {
  return (
    <div className='button'>
      <button
        onClick={() => {
          onAddIdea();
        }}
      >
        New Idea
      </button>
    </div>
  );
}
