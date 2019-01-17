import { cons, car, cdr, isAtom } from './cons';

test('pairs', () => {
  const p1 = cons(1, 2);
  expect(car(p1)).toEqual(1);
  expect(cdr(p1)).toEqual(2);

  const p2 = cons('hello', 'there');
  expect(car(p2)).toEqual('hello');
  expect(cdr(p2)).toEqual('there');

  const p3 = cons(2, cons(4, cons(6, null)));
  expect(car(p3)).toEqual(2);
  expect(car(cdr(p3))).toEqual(4);
  expect(car(cdr(cdr(p3)))).toEqual(6);
  expect(cdr(cdr(cdr(p3)))).toEqual(null);
});

test('isAtom', () => {
  expect(isAtom('atom')).toEqual(true);
  expect(isAtom(666)).toEqual(true);
  expect(isAtom(cons(1, 2))).toEqual(false);
  expect(isAtom([])).toEqual(false);
});
