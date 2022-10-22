import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Display } from './components/Display/Display';
import Display2x from './components/Display2x/Display2x';



export const App = () => {

  const minCount = 0;
  const maxCount = 5;
  const titleBtn_1 = 'inc';
  const titleBtn_2 = 'reset';
  const titleBtn_3 = 'set';

  const [count, setCount] = useState<number>(minCount);

  const onClickUpCountHandler = () => {
    if (count < maxCount) {
      setCount(count + 1)
    }
  }

  const onClickDownCountHandler = () => {
    if (count > minCount) {
      setCount(0)
    }
  }

  const disabledStyleInc = (count === maxCount) ? true : false;
  const disabledStyleRes = (count === minCount) ? true : false;

  return (
    <div className="App">
      <div className='counterWrapper'>
        <Display2x />
        <div className='buttonBlock'>
          <Button name={titleBtn_3} disabled={false} callback={()=>{}}/>
        </div>
      </div>
      <div className='counterWrapper'>
        <Display count={count} />
        <div className='buttonBlock'>
          <Button name={titleBtn_1} disabled={disabledStyleInc} callback={onClickUpCountHandler} />
          <Button name={titleBtn_2} disabled={disabledStyleRes} callback={onClickDownCountHandler} />
        </div>
      </div>
    </div>
  );
}

