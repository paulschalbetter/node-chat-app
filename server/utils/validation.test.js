const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let str = 123;
    expect(isRealString(str)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    let str = '     ';
    expect(isRealString(str)).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    let str = '  My Room   ';
    expect(isRealString(str)).toBeTruthy();
  });
});
