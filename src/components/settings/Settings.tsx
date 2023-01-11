import React, { useState } from "react";
import { Button } from "../button/Button";
import style from './Settings.module.css';
import { SettingsItem } from "./settingsItem/SettingsItem";


type SettingsPropsType = {
  editMode: boolean
  setEditMode: (status: boolean) => void
  error: boolean
  setError: (status: boolean) => void
}
export const Settings = (props: SettingsPropsType) => {
  const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startvalue')) || 0)
  const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxvalue')) || 5)

  if (startValue === maxValue) {
    props.setError(true)
  } else {
    props.setError(false)
  }
  const setValueToLocalStorage = () => {
    if (props.editMode) {
      localStorage.setItem('startvalue', startValue.toString())
      localStorage.setItem('maxvalue', maxValue.toString())
      props.setEditMode(false)
      console.log(props.editMode)
    }
  }


  return (
    <div className={style.wrapper}>
      <div className={style.valueContainer}>
        <SettingsItem
          title={'maxvalue'} 
          value={maxValue} 
          callback={setMaxValue}
          setEditMode={props.setEditMode} 
          setError={props.setError}
          error={props.error}
        />
        <SettingsItem
          title={'startvalue'} 
          value={startValue} 
          callback={setStartValue}
          setEditMode={props.setEditMode} 
          setError={props.setError}
          error={props.error}
        />
      </div>
      <div className={style.buttonContainer}>
        <Button
          title={'set'}
          onClickCallback={setValueToLocalStorage}
          disabled={props.error && props.editMode}
        />
      </div>
    </div>
  );
};
