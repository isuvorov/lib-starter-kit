import { double } from './double';
import { minus } from './minus';

export function quadro(num) {
  return double(num);
}

export function zero(num) {
  return minus(num, num);
}

export default quadro;
