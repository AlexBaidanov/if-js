import { sum } from '../main';

test('adds 2 + 5 to equal 7', () => {
  expect(sum(2)(5)).toBe(7);
});
