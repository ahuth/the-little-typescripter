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
  return typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean';
}

export function isPair(x: any): x is Cons<unknown, unknown> {
  return Array.isArray(x) && x.length === 2;
}
