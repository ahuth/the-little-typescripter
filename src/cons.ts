export function cons<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

export function car<A>(p: [A, any]): A {
  return p[0];
}

export function cdr<B>(p: [any, B]): B {
  return p[1];
}
