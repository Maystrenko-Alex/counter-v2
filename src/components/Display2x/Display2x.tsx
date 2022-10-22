import React, { useState } from 'react';
import s from './Display2x.module.css';
type Display2xPropsType = {

}
const Display2x = (props: Display2xPropsType) => {
  const [error, setError] = useState<boolean>(true)
  return (
    <div className={'displaySettings'}>
      <div className={s.text}>
        <span>{'max value:'}</span>
        <input className={error ? s.borderError : s.border } type={'number'}/>
      </div>
      <div className={s.text}>
        <span>{'start value:'}</span>
        <input className={error ? s.borderError : s.border } type={'number'}/>
      </div>
    </div>
  );
};

export default Display2x;