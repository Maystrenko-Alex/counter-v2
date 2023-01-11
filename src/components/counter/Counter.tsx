import React, { useState } from "react";
import { Button } from "../button/Button";
import style from './Counter.module.css';

type CounterPropsType = {
 editMode: boolean
 setEditMode: (value: boolean) => void
 error: boolean
setError: (status: boolean) => void
}
export const Counter = (props: CounterPropsType) => {
 
  const [counter, setCounter] = useState<number>(Number(localStorage.getItem('startvalue')))

  // if (localStorage.getItem('editMode') === 'false') {
  //   setCounter(+localStorage.getItem('startvalue') && 'ffewf')
  // } else {

  // }
  const incCounterHandler = () => {
    console.log('click')
    // if (counter < Number(localStorage.getItem('maxvalue'))) {
        if ( counter < Number(localStorage.getItem('maxvalue'))) {
           setCounter(counter+1)

      }
  };
  
  const displayValues = props.error 
  ? <span className={style.redText}>error</span>
  : props.editMode
    ? `enter value and press 'set'`
    : counter < Number(localStorage.getItem('maxvalue')) 
      ? counter
      : <span className={style.redText}>{counter}</span>
     
  const resetCounterHandler = () => {
    if (localStorage.getItem('startvalue')) {
      setCounter(Number(localStorage.getItem('startvalue')))
    }
  } 

  // const getDisplayValues = () => {
  //   debugger
  //   const localStorageValue = Number(localStorage.getItem('startvalue'))
  //   if (props.editMode) {
  //     return `enter values and press 'SET'`;
  //   } else if (localStorageValue && !props.editMode) return localStorageValue
  // }
  
  return (
    <div className={style.wrapper}>
      <div 
        className={` ${style.counterDisplay} `}>
        {displayValues}
        {/* { (localStorage.getItem('maxvalue')) ? props.count : 'enter values...'} */}
      </div>
      <div className={style.buttonContainer}>
        <Button  title={'inc'} onClickCallback={incCounterHandler} disabled={props.editMode || counter === Number(localStorage.getItem('maxvalue'))}/>
        <Button title={'reset'} onClickCallback={resetCounterHandler} disabled={props.editMode}/>
      </div>
    </div>
  );
};
