import React from 'react';

export type DisplayPropsType = {
  count: number
}

export const Display = (props: DisplayPropsType) => {

const styleDisplay = props.count === 5 ? 'displayBlock  redDisplay' : 'displayBlock';

  return (
    <div className={styleDisplay}>
      <span>{props.count}</span>
    </div>
  );
};
