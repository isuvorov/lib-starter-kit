import React from 'react';

// import range from 'lodash/range';
import { minus } from './minus';
import plus from './plus';

export const Square = ({ count }) => (
  <div>
    {range(count).map((i) => (
      <>
        <div>{i}</div>
        {range(count).map((j) => (
          <>
            <div>{i}</div>
            <div>{minus(i, j)}</div>
            <div>{plus(i, j)}</div>
          </>
        ))}
      </>
    ))}
  </div>
);

export default Square;
