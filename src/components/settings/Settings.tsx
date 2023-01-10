import React, { useState } from "react";
import { Button } from "../button/Button";
import style from './Settings.module.css';
import { SettingsItem } from "./settingsItem/SettingsItem";


type SettingsPropsType = {
  startValue: number
  maxValue: number
  editMode: boolean
  setStartValue: (value: number) => void
  setMaxValue: (value: number) => void
  setEditMode: (status: boolean) => void
  setCount: (value: number) => void
}
export const Settings = (props: SettingsPropsType) => {


  const setValueToLocalStorage = () => {
    if (props.editMode) {
      localStorage.setItem('startvalue', props.startValue.toString())
      localStorage.setItem('maxvalue', props.maxValue.toString())
      props.setCount(props.startValue)
      props.setEditMode(false)
    }

  }

  
  return (
    <div className={style.wrapper}>
      <div className={style.valueContainer}>
        <SettingsItem title={'max value'} value={props.maxValue}  callback={props.setMaxValue} setEditMode={props.setEditMode}/>
        <SettingsItem title={'start value'} value={props.startValue} callback={props.setStartValue} setEditMode={props.setEditMode}/>
      </div>
      <div className={style.buttonContainer}>
        <Button title={'set'} onClickCallback={setValueToLocalStorage} disabled={!props.editMode} />
      </div>
    </div>
  );
};
