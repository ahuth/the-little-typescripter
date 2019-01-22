import {
  firsts,
  insertRight,
  list,
  removeAllOccurances,
  removeFirstOccurance,
  toString
} from './list';

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

test('What is firsts of ((apple peach pumpkin) (plum pear cherry) (grape rasin pea) (bean carrot eggplant))', () => {
  const l = list(
    list('apple', 'peach', 'pumpkin'),
    list('plum', 'pear', 'cherry'),
    list('grape', 'raisin', 'pea'),
    list('bean', 'carrot', 'eggplant'),
  );
  expect(toString(firsts(l))).toEqual('(apple plum grape bean)');
});

test('Whas is firsts of ((a b) (c d) (e f))', () => {
  const l = list(list('a', 'b'), list('c', 'd'), list('e', 'f'));
  expect(toString(firsts(l))).toEqual('(a c e)');
});

test('What is firsts of ()', () => {
  expect(toString(firsts(list()))).toEqual('()');
});

test('What is firsts of (((five plums) four) (eleven green oranges) ((no) more))', () => {
  const l = list(
    list(list('five', 'plums'), 'four'),
    list('eleven', 'green', 'oranges'),
    list(list('no'), 'more'),
  );
  expect(toString(firsts(l))).toEqual('((five plums) eleven (no))');
});

test('What is insertRight of (ice cream with fudge for desert) and topping and fudge', () => {
  const l = list('ice', 'cream', 'with', 'fudge', 'for', 'dessert');
  expect(toString(insertRight(l, 'topping', 'fudge'))).toEqual('(ice cream with fudge topping for dessert)');
});

test('What is insertRight of (tacos tameles and salsa) and jalepeño and and', () => {
  const l = list('tacos', 'tamales', 'and', 'salsa');
  expect(toString(insertRight(l, 'jalepeño', 'and'))).toEqual('(tacos tamales and jalepeño salsa)');
});

test('What is insertRight of (a b c d f g d h) and e and d', () => {
  const l = list('a', 'b', 'c', 'd', 'f', 'g', 'd', 'h');
  expect(toString(insertRight(l, 'e', 'd'))).toEqual('(a b c d e f g d h)');
});

test('What is removeAllOccurances of cup and (Coffee cup tea cup and hick cup)', () => {
  const l = list('Coffee', 'cup', 'tea', 'cup', 'and', 'hick', 'cup');
  expect(toString(removeAllOccurances(l, 'cup'))).toEqual('(Coffee tea and hick)');
});
