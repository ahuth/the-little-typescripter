export function cons<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

export function car<A>(p: [A, any]): A {
  return p[0];
}

export function cdr<B>(p: [any, B]): B {
  return p[1];
}

export function isAtom(x: any): boolean {
  return !isPair(x) && !isEmpty(x);
}

export function isPair(x: any): boolean {
  return Array.isArray(x) && x.length === 2;
}

export function isEmpty(x: any): boolean {
  return Array.isArray(x) && x.length === 0;
}
