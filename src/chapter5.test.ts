import { countOccurances, list, insertRight, removeMember, toString } from './list';

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

test('What is insertRight of ((how much (wood)) could ((a (wood) chuck)) (((chuck))) (if (a) ((wood chuck))) could chuck wood) where new is roast and old is chuck', () => {
  const l = list(
    list('how', 'much', list('wood')),
    'could',
    list(list('a', list('wood'), 'chuck')),
    list(list(list('chuck'))),
    list('if', list('a'), list(list('wood', 'chuck'))),
    'could',
    'chuck',
    'wood',
  );
  expect(toString(insertRight(l, 'roast', 'chuck'))).toEqual('((how much (wood)) could ((a (wood) chuck roast)) (((chuck roast))) (if (a) ((wood chuck roast))) could chuck roast wood)');
});

test('What is countOccurances of banana and ((banana) (split ((((banana ice))) (cream (banana)) sherbet)) (banana) (bread) (banana brandy))', () => {
  const l = list(
    list('banana'),
    list('split', list(list(list(list('banana', 'ice'))), list('cream', list('banana')), 'sherbet')),
    list('banana'),
    list('bread'),
    list('banana', 'brandy'),
  );
  expect(countOccurances(l, 'banana')).toEqual(5);
});
