import {expect} from 'chai';
import getPoints from './points';

const failArray = [
  [true, 42],
  [false, 12],
  [true, 38],
  [true, 10],
  [true, 35],
  [false, 10],
  [true, 30],
  [true, 5],
  [true, 31],
  [true, 20]
];

const winArray = [
  [true, 42],
  [true, 12],
  [true, 38],
  [true, 10],
  [true, 35],
  [true, 31],
  [true, 30],
  [true, 5],
  [true, 31],
  [true, 20]
];

const fastWinArray = [
  [true, 2],
  [true, 12],
  [true, 8],
  [true, 10],
  [true, 5],
  [true, 10],
  [true, 20],
  [true, 5],
  [true, 1],
  [true, 20]
];

const slowWinArray = [
  [true, 42],
  [true, 32],
  [true, 38],
  [true, 30],
  [true, 35],
  [true, 31],
  [true, 30],
  [true, 35],
  [true, 31],
  [true, 50]
];

describe(`getPoints function`, () => {
  it(`expecting function to return -1 – game over`, () => {
    expect(getPoints(failArray, 2)).to.equal(-1);
  });
  it(`expecting function to return -1 – game over`, () => {
    expect(getPoints([], 2)).to.equal(-1);
  });
  it(`expecting function to return 14 points`, () => {
    expect(getPoints(winArray, 2)).to.equal(14);
  });
  it(`expecting function to return 12 points`, () => {
    expect(getPoints(winArray, 1)).to.equal(12);
  });
  it(`expecting function to return 20 points`, () => {
    expect(getPoints(fastWinArray, 2)).to.equal(20);
  });
  it(`expecting function to return 10 points`, () => {
    expect(getPoints(slowWinArray, 2)).to.equal(10);
  });
  it(`expecting function to return 6 points`, () => {
    expect(getPoints(slowWinArray, 0)).to.equal(6);
  });
});
