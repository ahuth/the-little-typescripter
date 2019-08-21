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

export function mul2(x: number, y: number): number {
  if (isZero(y)) { return 0; }
  return add2(x, mul2(x, sub1(y)));
}

export function isGreaterThan(x: number, y: number): boolean {
  if (isZero(x)) { return false; }
  if (isZero(y)) { return true; }
  return isGreaterThan(sub1(x), sub1(y));
}

export function isLessThan(x: number, y: number): boolean {
  if (isZero(y)) { return false; }
  if (isZero(x)) { return true; }
  return isLessThan(sub1(x), sub1(y));
}

export function isEqual(x: number, y: number): boolean {
  if (isGreaterThan(x, y)) { return false; }
  if (isLessThan(x, y)) { return false; }
  return true;
}

export function exp2(x: number, y: number): number {
  if (isZero(y)) { return 1; }
  return mul2(x, exp2(x, sub1(y)));
}

export function div2(x: number, y: number): number {
  if (isLessThan(x, y)) { return 0; }
  return add1(div2(sub2(x, y), y));
}
