import { every, list, List } from './list';
import { isAtom } from './cons';

function isAtomList(l: List): boolean {
  return every(l, isAtom);
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
