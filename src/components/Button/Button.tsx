import React from 'react';

export type ButtonPropsType = {
  name: string
  disabled: boolean
  callback: () => void
}

export const Button = (props: ButtonPropsType) => {

  // const onClickHandler = () => {
  //   props.callback()
  // }

  return (
    <div>
      <button
        disabled={props.disabled}
        onClick={props.callback}
      >
        {props.name}
      </button>
    </div>
  );
};

