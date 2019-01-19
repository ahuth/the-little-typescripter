import { car, cdr, isAtom, isPair } from './cons';
import { isList, list, toString } from './list';

test('Is it true that this is an atom: "atom"', () => {
  expect(isAtom('atom')).toEqual(true);
});

test('Is it true that this is an atom: "turkey"', () => {
  expect(isAtom('turkey')).toEqual(true);
});

test('Is it true that this is an atom: 1492', () => {
  expect(isAtom(1492)).toEqual(true);
});

test('Is it true that this is an atom: "u"', () => {
  expect(isAtom('u')).toEqual(true);
});

test('Is it true that this is an atom: "*abc$"', () => {
  expect(isAtom('*abc$')).toEqual(true);
});

test('Is it true that this is a list: (atom)', () => {
  expect(isPair(list('atom'))).toEqual(true);
});

test('Is it true that this is a list: (atom turkey or)', () => {
  expect(isPair(list('atom', 'turkey', 'or'))).toEqual(true);
});

test('Is it true that this is a list: ((atom turkey) or)', () => {
  expect(isPair(list(list('atom', 'turkey'), 'or'))).toEqual(true);
});

test('Is it true that is is a list: (((how) are) ((you) (doing so)) far)', () => {
  expect(isPair(list(list(list(list('how'), 'are'), list(list('you'), list('doing', 'so'))), 'far'))).toEqual(true);
});

test('Is it true that this is a list: ()', () => {
  expect(isList(list())).toEqual(true);
});

test('Is it true that this is an atom: ()', () => {
  expect(isAtom(list())).toEqual(false);
});

test('Is it true that this is a list: (() () () ())', () => {
  expect(isList(list(list(), list(), list(), list()))).toEqual(true);
});

test('What is the car of (a b c)', () => {
  expect(car(list('a', 'b', 'c'))).toEqual('a');
});

test('What is the car of ((a b c) x y z)', () => {
  expect(toString(car(list(list('a', 'b', 'c'), 'x', 'y', 'z')))).toEqual('(a b c)');
});

test('What is the car of (((hotdogs) (and) (pickle)) relish)', () => {
  expect(toString(car(list(list(list('hotdogs')), list('and'), list('pickle'), 'relish')))).toEqual('((hotdogs))');
});

test('What is the car of the car of (((hotdogs)) (and))', () => {
  expect(toString(car(car(list(list(list('hotdogs')), list('and')))))).toEqual('(hotdogs)');
});

test('What is the cdr of (a b c)', () => {
  expect(toString(cdr(list('a', 'b', 'c')))).toEqual('(b c)');
});

test('What is the cdr of ((a b c) x y z)', () => {
  expect(toString(cdr(list(list('a', 'b', 'c'), 'x', 'y', 'z')))).toEqual('(x y z)');
});

test('What is the cdr of (hamburger)', () => {
  expect(toString(cdr(list('hamburger')))).toEqual('()');
});
