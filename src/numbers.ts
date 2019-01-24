export function add1(n: number): number {
  return n + 1;
}

export function sub1(n: number): number {
  return n - 1;
}

export function isZero(n: number): boolean {
  return n === 0;
}

export function add2(x: number, y: number): number {
  if (isZero(y)) { return x; }
  return add2(add1(x), sub1(y));
}

export function sub2(x: number, y: number): number {
  if (isZero(y)) { return x; }
  return sub2(sub1(x), sub1(y));
}
