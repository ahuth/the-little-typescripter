import { car, cdr, cons, isAtom, isPair } from './cons';
import { isList, isEmpty, list, toString } from './list';

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

test('What is the car of the cdr of ((b) (x y) ((c)))', () => {
  expect(toString(car(cdr(list(list('b'), list('x', 'y'), list(list('c'))))))).toEqual('(x y)');
});

test('What is the cdr of the cdr of ((b) (x y) ((c)))', () => {
  expect(toString(cdr(cdr(list(list('b'), list('x', 'y'), list(list('c'))))))).toEqual('(((c)))');
});

test('What is the cons of peanut and (butter and jelly)', () => {
  expect(toString(cons(
    'peanut',
    list('butter', 'and', 'jelly'),
  ))).toEqual('(peanut butter and jelly)');
});

test('What is the cons of (banana and) and (peanut butter and jelly)', () => {
  expect(toString(cons(
    list('banana', 'and'),
    list('peanut', 'butter', 'and', 'jelly'),
  ))).toEqual('((banana and) peanut butter and jelly)');
});

test('What is the cons of ((help) this) and (is very ((hard) to learn))', () => {
  expect(toString(cons(
    list(list('help'), 'this'),
    list('is', 'very', list(list('hard'), 'to', 'learn')),
  ))).toEqual('(((help) this) is very ((hard) to learn))');
});

test('What is the cons of (a b (c)) and ()', () => {
  expect(toString(cons(
    list('a', 'b', list('c')),
    list(),
  ))).toEqual('((a b (c)))');
});

test('What is the cons of "a" and the car of ((b) c d)', () => {
  expect(toString(cons(
    'a',
    car(list(list('b'), 'c', 'd')),
  ))).toEqual('(a b)');
});

test('What is the cons of "a" and the cdr of ((b) c d)', () => {
  expect(toString(cons(
    'a',
    cdr(list(list('b'), 'c', 'd')),
  ))).toEqual('(a c d)');
});

test('What is isEmpty of ()', () => {
  expect(isEmpty(list())).toEqual(true);
});

test('Is isEmpty of (a b c) true or false', () => {
  expect(isEmpty(list('a', 'b', 'c'))).toEqual(false);
});
