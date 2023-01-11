import React, { ChangeEvent, useState } from 'react';
import style from './SettingsItem.module.css'


type SettingsItemPropsType = {
  title: string
  value: number
  error: boolean
  setEditMode: (status: boolean) => void
  setError: (status: boolean) => void
  callback: (value: number) => void
}
export const SettingsItem = (props: SettingsItemPropsType) => {


  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value < 0) {
      props.setError(true)
    } else {
      props.setError(false)
      props.setEditMode(true)
    }
    props.callback(+e.currentTarget.value)
  }

  const finalClassName = `${style.input} ${props.value < 0 || props.error ? style.error : ''}`
  return (
    <div className={style.wrapper}>
      <span className={style.title}>
        {props.title}:
      </span>
      <div className={style.inputBlock}>
        <input
          className={finalClassName}
          value={props.value}
          type='number'
          onChange={onChangeValueHandler}
        />
      </div>
    </div>
  );
};
