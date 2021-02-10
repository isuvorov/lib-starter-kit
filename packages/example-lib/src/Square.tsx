import range from 'lodash/range';
import React from 'react';

import { minus } from './minus';
import plus from './plus';

export const Square = ({ count }: any) => (
  <div>
    {range(count).map((i: any) => (
      <>
        <div>{i}</div>
        {range(count).map((j: any) => (
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
