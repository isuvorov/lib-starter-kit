
import range from 'lodash/range';
import double from './double';
import { quadro } from './quadro';

export const Table = ({ count }) => (
  <div>
    {range(count).map((i) => (
      <>
        <div>{i}</div>
        <div>{double(i)}</div>
        <div>{quadro(i)}</div>
      </>
    ))}
  </div>
);

export default Table;
