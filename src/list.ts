import { cons, car, cdr } from './cons';

export function list(...items: Array<any>): [any, any] {
  return items.reduceRight((acc, item) => cons(item, acc), []);
}

export function nth(l: [any, any], n: number): any {
  if (n <= 0) {
    return car(l);
  }
  return nth(cdr(l), n - 1);
}
