// import minus from 'minus';
import { plus } from './plus';
import { minus } from './minus';

export function double(num: number): number {
  return plus(num, num);
}

export function zero(num: number): number {
  return minus(num, num);
}

export default double;
