import { list, nth } from './list';

test('lists', () => {
  const l = list(1, 1, 2, 3, 5, 8);
  expect(nth(l, 0)).toEqual(1);
  expect(nth(l, 1)).toEqual(1);
  expect(nth(l, 2)).toEqual(2);
  expect(nth(l, 3)).toEqual(3);
  expect(nth(l, 4)).toEqual(5);
  expect(nth(l, 5)).toEqual(8);
});
