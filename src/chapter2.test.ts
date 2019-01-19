import { every, list, List } from './list';
import { isAtom } from './cons';

function isAtomList(l: List): boolean {
  return every(l, isAtom);
}

function isMember(l: List, x: any): boolean {
  return !every(l, a => a !== x);
}

test('True or false: (Jack Sprat could eat no chicken fat) is an atom list', () => {
  expect(isAtomList(list('Jack', 'Sprat', 'could', 'eat', 'no', 'chicken', 'fat'))).toEqual(true);
});

test('True or false: ((Jack) Sprat could eat no chicken fat) is an atom list', () => {
  expect(isAtomList(list(list('Jack'), 'Sprat', 'could', 'eat', 'no', 'chicken', 'fat'))).toEqual(false);
});

test('True or false: (Jack (Sprat could) eat no chicken fat) is an atom list', () => {
  expect(isAtomList(list('Jack', list('Sprat', 'could'), 'eat', 'no', 'chicken', 'fat'))).toEqual(false);
});

test('True or false: () is an atom list', () => {
  expect(isAtomList(list())).toEqual(true);
});

test('What is the value of isAtomList of (bacon and eggs)', () => {
  expect(isAtomList(list('bacon', 'and', 'eggs'))).toEqual(true);
});

test('What is the value of isAtomList of (bacon (and eggs))', () => {
  expect(isAtomList(list('bacon', list('and', 'eggs')))).toEqual(false);
});

test('Is it true that tea is a member of (coffee tea or milk)', () => {
  expect(isMember(list('coffee', 'tea', 'or', 'milk'), 'tea')).toEqual(true);
});

test('Is it true that poached is a member of (fried eggs and scrambled eggs)', () => {
  expect(isMember(list('fried', 'eggs', 'and', 'scrambled', 'eggs'), 'poached')).toEqual(false);
});
