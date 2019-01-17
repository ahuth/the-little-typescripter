import {
  cons,
  car,
  cdr,
  isAtom,
  Cons,
} from './cons';

type EmptyList = [];
type List = Cons<any, any> | EmptyList;

export function list<A, B, C, D, E, F, G, H, I, J>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, Cons<F, Cons<G, Cons<H, Cons<I, Cons<J, EmptyList>>>>>>>>>>;
export function list<A, B, C, D, E, F, G, H, I>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, Cons<F, Cons<G, Cons<H, Cons<I, EmptyList>>>>>>>>>;
export function list<A, B, C, D, E, F, G, H>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, Cons<F, Cons<G, Cons<H, EmptyList>>>>>>>>;
export function list<A, B, C, D, E, F, G>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, Cons<F, Cons<G, EmptyList>>>>>>>;
export function list<A, B, C, D, E, F>(a: A, b: B, c: C, d: D, e: E, f: F): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, Cons<F, EmptyList>>>>>>;
export function list<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): Cons<A, Cons<B, Cons<C, Cons<D, Cons<E, EmptyList>>>>>;
export function list<A, B, C, D>(a: A, b: B, c: C, d: D): Cons<A, Cons<B, Cons<C, Cons<D, EmptyList>>>>;
export function list<A, B, C>(a: A, b: B, c: C): Cons<A, Cons<B, Cons<C, EmptyList>>>;
export function list<A, B>(a: A, b: B): Cons<A, Cons<B, EmptyList>>;
export function list<A>(a: A): Cons<A, EmptyList>;
export function list(): EmptyList;
export function list(...items: Array<any>) {
  return items.reduceRight((acc, item) => cons(item, acc), []);
}

export function isEmpty(x: List): x is EmptyList {
  return Array.isArray(x) && x.length === 0;
}

export function getHead(x: List): any {
  if (isEmpty(x)) { return undefined; }
  return car(x);
}

export function getTail(x: List): List {
  if (isEmpty(x)) { return []; }
  return cdr(x);
}

export function toString(l: List, acc = '('): string {
  if (isEmpty(l)) { return acc + ')'; }
  if (isAtom(l)) { return String(l); }

  const head = getHead(l);
  const tail = getTail(l);
  const trailing = isEmpty(tail) ? '' : ' ';

  return toString(tail, acc + toString(head) + trailing);
}

export function nth(l: List, n: number): any {
  if (n <= 0) {
    return getHead(l);
  }
  return nth(getTail(l), n - 1);
}
