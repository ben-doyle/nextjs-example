import { describe } from '@jest/globals';
import turtle, { frog } from '../src/app/utils';

describe('utils', () => {
  it('turtle', () => {
    expect(turtle()).toBe('turtle');
  });

  it('frog', () => {
    expect(frog()).toBe('frog');
  });
});
