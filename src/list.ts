import {
  cons,
  car,
  cdr,
  isAtom,
  isPair,
  Cons,
} from './cons';
import { add1, add2, sub1, isZero } from './numbers';

type EmptyList = null;
export type List = Cons<any, any> | EmptyList;
// export type List<A> = Cons<A, List<A>> | EmptyList;

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
  return items.reduceRight((acc, item) => cons(item, acc), null);
}

export function isList(x: any): x is List {
  return isPair(x) || isEmpty(x);
}

export function isEmpty(x: List): x is EmptyList {
  return x === null;
}

export function getHead(x: List): any {
  if (isEmpty(x)) { return undefined; }
  return car(x);
}

export function getTail(x: List): List {
  if (isEmpty(x)) { return x; }
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

export function every(l: List, predicate: (x: any) => boolean): boolean {
  if (isEmpty(l)) { return true; }
  if (!predicate(getHead(l))) { return false; }
  return every(getTail(l), predicate);
}

export function removeFirstOccurance(l: List, member: any): List {
  if (isEmpty(l)) { return l; }
  if (getHead(l) === member) { return getTail(l); }

  return cons(
    getHead(l),
    removeFirstOccurance(getTail(l), member),
  );
}

export function firsts(l: List): List {
  if (isEmpty(l)) { return l; }

  return cons(
    getHead(getHead(l) as List),
    firsts(getTail(l)),
  );
}

export function insertRight(l: List, newMember: any, oldMember: any): List {
  if (isEmpty(l)) { return null; }

  const head = getHead(l);
  const tail = getTail(l);

  if (isList(head)) {
    return cons(
      insertRight(head, newMember, oldMember),
      insertRight(tail, newMember, oldMember),
    );
  }

  if (head === oldMember) {
    return cons(head, cons(newMember, tail));
  }

  return cons(head, insertRight(tail, newMember, oldMember));
}

export function removeMember(l: List, member: any): List {
  if (isEmpty(l)) { return null; }

  const head = getHead(l);
  const tail = getTail(l);

  if (isList(head)) {
    return cons(
      removeMember(head, member),
      removeMember(tail, member),
    );
  }

  if (head === member) {
    return removeMember(tail, member);
  }

  return cons(
    head,
    removeMember(tail, member),
  );
}

export function length(l: List): number {
  if (isEmpty(l)) { return 0; }
  return add1(length(getTail(l)));
}

export function pick(l: List, n: number): any {
  if (isZero(n)) { return getHead(l); }
  return pick(getTail(l), sub1(n));
}

export function countOccurances(l: List, member: any): number {
  if (isEmpty(l)) { return 0; }

  const head = getHead(l);
  const tail = getTail(l);

  if (isList(head)) {
    return add2(countOccurances(head, member), countOccurances(tail, member));
  }

  if (head === member) {
    return add1(countOccurances(tail, member));
  }

  return countOccurances(tail, member);
}
