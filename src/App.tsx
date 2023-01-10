import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';




export const App = () => {

  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(startValue)
  const [error, seterror] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)

  return (
    <div className="App">
      <Settings 
        startValue={startValue} setStartValue={setStartValue} 
        maxValue={maxValue} setMaxValue={setMaxValue}
        editMode={editMode} setEditMode={setEditMode}
        setCount={setCount}
        />
      <Counter count={count} setCount={setCount}/>
    </div>
  );
}


