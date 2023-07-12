import { describe } from '@jest/globals';
import { frog } from '../src/app/utils';

describe('utils', () => {
  it('should return true if the value is a string', () => {
    expect(frog()).toBe('frog');
  });
});
