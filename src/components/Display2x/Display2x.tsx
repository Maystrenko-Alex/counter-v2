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
    props.setMax(Number(e.currentTarget.value))
    if (Number(e.currentTarget.value) >= 0) {
    } else {
      setError(true)
    }
    localStorage.setItem('isSettings', 'false')
  }
  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setStart(Number(e.currentTarget.value))
    if (Number(e.currentTarget.value) >= 0) {
      setError(false)
    } else {
      setError(true)
    }
    localStorage.setItem('isSettings', 'false')
  }
  return (
    <div className={'displaySettings'}>
      <SettingsForCounter title={'max value:'} error={error} setting={props.max } callback={onChangeMaxValueHandler} />
      <SettingsForCounter title={'start value:'} error={error} setting={props.start} callback={onChangeStartValueHandler} />
    </div>
  );
};

type SettingsForCounterPropsType = {
  title: string
  error: boolean
  setting: number
  callback: (e: ChangeEvent<HTMLInputElement>) => void
}

const SettingsForCounter = (props: SettingsForCounterPropsType) => {
  return (
    <div className={s.text}>
      <span>{props.title}</span>
      <input
        className={props.error ? s.borderError : s.border}
        type={'number'}
        value={props.setting}
        onChange={props.callback}
      />
    </div>
  )
}


export default Display2x;