import { add1, add2, sub1, sub2, isZero } from './numbers';
import { every, getHead, getTail, isEmpty, list, List } from './list';
import { isAtom } from './cons';

function isNumberList(l: List): boolean {
  return every(l, x => typeof x === 'number');
}

function addNumberList(l: List): number {
  if (isEmpty(l)) { return 0; }
  return add2(getHead(l), addNumberList(getTail(l)));
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
