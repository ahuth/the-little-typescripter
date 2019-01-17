export type Cons<A, B> = [A, B];

export function cons<A, B>(a: A, b: B): Cons<A, B> {
  return [a, b];
}

export function car<A>(p: Cons<A, any>): A {
  return p[0];
}

export function cdr<B>(p: Cons<any, B>): B {
  return p[1];
}

export function isAtom(x: any): boolean {
  return !isPair(x) && !Array.isArray(x);
}

export function isPair(x: any): boolean {
  return Array.isArray(x) && x.length === 2;
}
