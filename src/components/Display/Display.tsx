import React from 'react';

export type DisplayPropsType = {
  count: number | string
  start: number
  max: number
}

export const Display = (props: DisplayPropsType) => {

const styleDisplay = props.count === props.max ? 'displayBlock  redDisplay' : 'displayBlock';

  return (
    <div className={styleDisplay}>
      <span>{props.count}</span>
    </div>
  );
};
