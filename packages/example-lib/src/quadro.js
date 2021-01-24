import { double } from './double';
import { minus } from './minus';

export function quadro(num: number): number {
  return double(num);
}

export function zero(num: number): number {
  return minus(num, num);
}

export default quadro;
