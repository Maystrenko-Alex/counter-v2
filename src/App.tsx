import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Display } from './components/Display/Display';
import Display2x from './components/Display2x/Display2x';



export const App = () => {

  const startvalue = (Number(localStorage.getItem('start')) || 0 )
  const maxtvalue = (Number(localStorage.getItem('max')) || 0 )
  const titleBtn_1 = 'inc';
  const titleBtn_2 = 'reset';
  const titleBtn_3 = 'set';

  const [count, setCount] = useState<number>(0);
  const [start, setStart] = useState<number>(startvalue)
  const [max, setMax] = useState<number>(maxtvalue)

  const onClickUpCountHandler = () => {
    if (count < max) {
      setCount(count + 1)
    }
  }

  const onClickDownCountHandler = () => {
    if (count > start) {
      setCount(0)
    }
  }
  const setToLocalStorage = () => {
    localStorage.setItem('start', start.toString())
    localStorage.setItem('max', max.toString())
    setCount(Number(localStorage.getItem('start')))
    
  }
 
  const disabledStyleInc = (count === max) ? true : false;
  const disabledStyleRes = (count === start && start !== max) ? true : false;
  
  return (
    <div className="App">
      <div className='counterWrapper'>
        <Display2x start={start} max={max} setStart={setStart} setMax={setMax} />
        <div className='buttonBlock'>
          <Button name={titleBtn_3} disabled={false} callback={setToLocalStorage} />
        </div>
      </div>
      <div className='counterWrapper'>
        <Display count={count ? count : 'enter values and press key'} start={start} max={max}/>
        <div className='buttonBlock'>
          <Button name={titleBtn_1} disabled={disabledStyleInc} callback={onClickUpCountHandler} />
          <Button name={titleBtn_2} disabled={disabledStyleRes} callback={onClickDownCountHandler} />
        </div>
      </div>
    </div>
  );
}

