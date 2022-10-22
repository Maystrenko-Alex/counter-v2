import React, { ChangeEvent, useState } from 'react';
import s from './Display2x.module.css';
type Display2xPropsType = {
  start: number
  max: number
  setStart: (start: number) => void
  setMax: (max: number) => void

}
const Display2x = (props: Display2xPropsType) => {
  const [error, setError] = useState<boolean>(false)
  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) >= 0) {
      props.setMax(Number(e.currentTarget.value))
    } else {
      setError(true)
    }
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) >= 0) {
      props.setStart(Number(e.currentTarget.value))
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <div className={'displaySettings'}>
      <div className={s.text}>
        <span>{'max value:'}</span>
        <input
          className={error ? s.borderError : s.border}
          type={'number'}
          value={props.max}
          onChange={onChangeMaxValueHandler}
        />
      </div>
      <div className={s.text}>
        <span>{'start value:'}</span>
        <input
          className={error ? s.borderError : s.border}
          type={'number'}
          value={props.start}
          onChange={onChangeStartValueHandler}
        />
      </div>
    </div>
  );
};

export default Display2x;