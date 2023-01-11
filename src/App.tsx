import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';




export const App = () => {


  const [editMode, setEditMode] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  return (
    <div className="App">
      <Settings
        editMode={editMode} setEditMode={setEditMode}
        error={error} setError={setError}

      />
      <Counter
        editMode={editMode} setEditMode={setEditMode}
        error={error} setError={setError}
       />
    </div>
  );
}


