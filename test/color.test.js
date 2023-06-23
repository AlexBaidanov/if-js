import { colors } from '../main';

test('colors array has magenta on it', () => {
  expect(colors).toContain('magenta');
  expect(colors).toContain('cyan');
  expect(colors).toContain('firebrick');
  expect(colors).toContain('springgreen');
  expect(colors).toContain('skyblue');
});
