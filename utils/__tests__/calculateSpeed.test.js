import calculateSpeed from '../calculateSpeed.js';

describe('calculateSpeed', () => {
  it('should return 0 when the distance is 0', () => {
    const distance = 0;
    const time = 5;
    const expected = 0;
    const actual = calculateSpeed(distance, time);
    expect(actual).toBe(expected);
  });
  it('should return 5 when the distance is 15 and time is 3', () => {
    const distance = 15;
    const time = 3;
    const expected = 5;
    const actual = calculateSpeed(distance, time);
    expect(actual).toBe(expected);
  });

  it('should return 0 when time is 0', () => {
    const distance = 15;
    const time = 0;
    const expected = 0;
    const actual = calculateSpeed(distance, time);
    expect(actual).toBe(expected);
  });

  it('should return 20.25 when distance is 81 and time is 4', () => {
    const distance = 81;
    const time = 4;
    const expected = 20.25;
    const actual = calculateSpeed(distance, time);
    expect(actual).toBe(expected);
  });
});
