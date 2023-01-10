import React, { useState } from "react";
import { Button } from "../button/Button";
import style from './Counter.module.css';

type CounterPropsType = {
  count: number
  setCount: (value: number) => void
}
export const Counter = (props: CounterPropsType) => {
 
  // if (localStorage.getItem('editMode') === 'false') {
  //   setCounter(+localStorage.getItem('startvalue') && 'ffewf')
  // } else {

  // }
  const incCounterHandler = () => {
    if (localStorage.getItem('maxvalue')) {
      if (props.count < Number(localStorage.getItem('maxvalue'))) {
        props.setCount(props.count+1)
      }
    }
  };
  
  // const displayValues = localStorage.getItem('editMode') === 'true'
  //   ? setCounter(+localStorage.getItem('startvalue'))
  //   : localStorage.getItem('error') === 'true'
  //    ? 'incorrect value'
  //    : `enter value and press 'set'`
  const resetCounterHandler = () => {
    if (localStorage.getItem('startvalue')) {
      props.setCount(Number(localStorage.getItem('startvalue')))
    }
  } 
  return (
    <div className={style.wrapper}>
      <div className={style.counterDisplay}>
        {/* {counterValues} */}
        { (localStorage.getItem('maxvalue')) ? props.count : 'enter values...'}
      </div>
      <div className={style.buttonContainer}>
        <Button  title={'inc'} onClickCallback={incCounterHandler} disabled={false}/>
        <Button title={'reset'} onClickCallback={resetCounterHandler} disabled={false}/>
      </div>
    </div>
  );
};
