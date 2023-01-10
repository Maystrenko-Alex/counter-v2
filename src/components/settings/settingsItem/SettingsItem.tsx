import React, { ChangeEvent, useState } from 'react';
import style from './SettingsItem.module.css'


type SettingsItemPropsType = {
  title: string
  value: number
  setEditMode: (status: boolean) => void
  callback: (value: number) => void
}
export const SettingsItem = (props: SettingsItemPropsType) => {
  
  const [error, setError] = useState<boolean>(false);


  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setEditMode(true)
   props.callback(+e.currentTarget.value)
  }
  return (
    <div className={style.wrapper}>
      <span className={style.title}>
        {props.title}:
      </span>
      <div className={style.inputBlock}>
        <input
          className={`${style.input} ${props.value < 0 ? style.error : ''}`}
          value={props.value}
          type='number'
          onChange={onChangeValueHandler}
        />
      </div>
    </div>
  );
};
