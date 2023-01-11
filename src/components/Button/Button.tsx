import React, { ReactNode } from 'react';
import style from './Button.module.css';
type ButtonPropsType = {
  title: string
  onClickCallback: () => void
  disabled?: boolean
}
export const Button = ({onClickCallback, title, disabled}:ButtonPropsType) => {
  const onClickHandler = () => onClickCallback()
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={onClickHandler} disabled={disabled}>{title}</button>
    </div>
  )
}  