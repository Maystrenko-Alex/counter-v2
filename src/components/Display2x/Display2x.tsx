import React, { useState } from 'react';
import s from './Display2x.module.css';
type Display2xPropsType = {
  start: number
  max: number
  setStart: (start: number) => void
  setMax: (max: number) => void

}
const Display2x = (props: Display2xPropsType) => {
  const [error, setError] = useState<boolean>(false)
  return (
    <div className={'displaySettings'}>
      <div className={s.text}>
        <span>{'max value:'}</span>
        <input 
          className={error ? s.borderError : s.border } 
          type={'number'}
          value={props.max}
          onChange={(e)=>props.setMax(Number(e.currentTarget.value))}
        />
      </div>
      <div className={s.text}>
        <span>{'start value:'}</span>
        <input 
          className={error ? s.borderError : s.border } 
          type={'number'}
          value={props.start}
          onChange={(e)=>props.setStart(Number(e.currentTarget.value))}
        />
      </div>
    </div>
  );
};

export default Display2x;