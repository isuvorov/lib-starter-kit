export function plus(a: number, b: number): number {
  const sum = a + b;
  if (sum > 100) return 100;
  if (sum < 0) return 0;
  return sum;
}

export function doublePlus(a: number, b: number) {
  const sum = a + b;
  if (sum > 100) return 100;
  if (sum < 0) return 0;
  return sum;
}

export default plus;
