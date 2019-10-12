import { list, removeMember, toString } from './list';

test('What is removeMember of cup and ((coffee) cup ((tea) cup) (and (hick)) cup)', () => {
  const l = list(
    list('coffee'),
    'cup',
    list(list('tea'), 'cup'),
    list('and', list('hick')),
    'cup',
  );
  expect(toString(removeMember(l, 'cup'))).toEqual('((coffee) ((tea)) (and (hick)))');
});
