import calculations from './calculateAltitude.js';

describe('calculateAltitude', () => {
  const calculateAltitude = calculations(3);
  it('should return 0 when t is 0', () => {
    const t = 0;
    const expected = 0;
    const actual = calculateAltitude(t);
    expect(actual).toBe(expected);
  });

  it('should return 13,5 when t is 3', () => {
    const t = 3;
    const expected = 13.5;
    const actual = calculateAltitude(t);
    expect(actual).toBe(expected);
  });
});
