import { add1, add2, sub1, sub2, mul2, isZero } from './numbers';
import { cons, isAtom } from './cons';
import { every, getHead, getTail, isEmpty, list, toString, List } from './list';

function isNumberList(l: List): boolean {
  return every(l, x => typeof x === 'number');
}

function addNumberList(l: List): number {
  if (isEmpty(l)) { return 0; }
  return add2(getHead(l), addNumberList(getTail(l)));
}

function addNumberLists(a: List, b: List): List {
  if (isEmpty(a) && isEmpty(b)) { return null; }
  if (isEmpty(a)) { return b; }
  if (isEmpty(b)) { return a; }
  return cons(
    add2(getHead(a), getHead(b)),
    addNumberLists(getTail(a), getTail(b)),
  );
}

test('Is 14 an atom', () => {
  expect(isAtom(14)).toEqual(true);
});

test('What is add1 of 67', () => {
  expect(add1(67)).toEqual(68);
})

test('What is sub1 of 5', () => {
  expect(sub1(5)).toEqual(4);
});

test('Is isZero of 0 true or false', () => {
  expect(isZero(0)).toEqual(true);
});

test('Is isZero of 1492 true or false', () => {
  expect(isZero(1492)).toEqual(false);
});

test('What is add2 of 46 and 12', () => {
  expect(add2(46, 12)).toEqual(58);
});

test('What is sub2 of 14 and 3', () => {
  expect(sub2(14, 3)).toEqual(11);
});

test('Is (2 11 3 79 47 6) a number list', () => {
  const l = list(2, 11, 3, 79, 47, 6);
  expect(isNumberList(l)).toEqual(true);
});

test('Is (8 55 5 555) a number list', () => {
  const l = list(8, 55, 5, 555);
  expect(isNumberList(l)).toEqual(true);
});

test('Is (1 2 8 apple 4 3) a number list', () => {
  const l = list(1, 2, 8, 'apple', 4, 3);
  expect(isNumberList(l)).toEqual(false);
});

test('Is (3 (7 4) 13 9) a number list', () => {
  const l = list(3, list(7, 4), 13, 9);
  expect(isNumberList(l)).toEqual(false);
});

test('Is () a number list', () => {
  const l = list();
  expect(isNumberList(l)).toEqual(true);
});

test('What is addNumberList of (3 5 2 8)', () => {
  const l = list(3, 5, 2, 8);
  expect(addNumberList(l)).toEqual(18);
});

test('What is addNumberList of (15 6 7 12 3)', () => {
  const l = list(15, 6, 7, 12, 3);
  expect(addNumberList(l)).toEqual(43);
});

test('What is mul2 of 5 and 3', () => {
  expect(mul2(5, 3)).toEqual(15);
});

test('What is mul2 of 13 and 4', () => {
  expect(mul2(13, 4)).toEqual(52);
});

test('What is addNumberLists of (3 6 9 11 4) and (8 5 2 0 7)', () => {
  const a = list(3, 6, 9, 11, 4);
  const b = list(8, 5, 2, 0, 7);
  expect(toString(addNumberLists(a, b))).toEqual('(11 11 11 11 11)');
});

test('What is addNumberLists of (2 3) and (4 6)', () => {
  const a = list(2, 3);
  const b = list(4, 6);
  expect(toString(addNumberLists(a, b))).toEqual('(6 9)');
});

test('What is addNumberLists of (3 7) and (4 6)', () => {
  const a = list(3, 7);
  const b = list(4, 6);
  expect(toString(addNumberLists(a, b))).toEqual('(7 13)');
});

test('What is addNumberLists of (3 7 8 1) and (4 6)', () => {
  const a = list(3, 7, 8, 1);
  const b = list(4, 6);
  expect(toString(addNumberLists(a, b))).toEqual('(7 13 8 1)');
});
