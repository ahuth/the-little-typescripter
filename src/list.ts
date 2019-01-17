import { cons, car, cdr, isAtom, isEmpty } from './cons';

export const getHead = car;
export const getTail = cdr;

export function list(...items: Array<any>): [any, any] {
  return items.reduceRight((acc, item) => cons(item, acc), []);
}

export function toString(l: [any, any], acc = '('): string {
  if (isEmpty(l)) { return acc + ')'; }
  if (isAtom(l)) { return String(l); }

  const head = getHead(l);
  const tail = getTail(l);
  const trailing = isEmpty(tail) ? '' : ' ';

  return toString(tail, acc + toString(head) + trailing);
}

export function nth(l: [any, any], n: number): any {
  if (n <= 0) {
    return getHead(l);
  }
  return nth(getTail(l), n - 1);
}
