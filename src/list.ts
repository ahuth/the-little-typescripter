import { cons, car, cdr } from './cons';

export const getHead = car;
export const getTail = cdr;

export function list(...items: Array<any>): [any, any] {
  return items.reduceRight((acc, item) => cons(item, acc), []);
}

export function nth(l: [any, any], n: number): any {
  if (n <= 0) {
    return getHead(l);
  }
  return nth(getTail(l), n - 1);
}
