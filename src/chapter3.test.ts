import { list, removeFirstOccurance, toString } from './list';

test('What is removeFirstOccurance of mint and (lamb chops and mint jelly)', () => {
  const l = list('lamb', 'chops', 'and', 'mint', 'jelly');
  expect(toString(removeFirstOccurance(l, 'mint'))).toEqual('(lamb chops and jelly)');
});

test('What is removeFirstOccurance of mint and (lamb chops and mint flavored mint jelly)', () => {
  const l = list('lamb', 'chops', 'and', 'mint', 'flavored', 'mint', 'jelly');
  expect(toString(removeFirstOccurance(l, 'mint'))).toEqual('(lamb chops and flavored mint jelly)');
});

test('What is removeFirstOccurance of toast and (Bacon lettuce and tomato)', () => {
  const l = list('Bacon', 'lettuce', 'and', 'tomato');
  expect(toString(removeFirstOccurance(l, 'toast'))).toEqual('(Bacon lettuce and tomato)');
});

test('What is removeFirstOccurance of cup and (Coffee cup tea cup and hick cup)', () => {
  const l = list('Coffee', 'cup', 'tea', 'cup', 'and', 'hick', 'cup');
  expect(toString(removeFirstOccurance(l, 'cup'))).toEqual('(Coffee tea cup and hick cup)');
});
