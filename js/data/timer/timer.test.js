import {
  expect
} from 'chai';
import addTimer from './timer.js';

const testTimer = addTimer(3);

describe(`timer function`, () => {
  it(`expect to return 3 sec left`, () => {
    expect(testTimer.tick()).to.equal(3);
  });
  it(`expect to return 2 sec left`, () => {
    expect(testTimer.tick()).to.equal(2);
  });
  it(`expect to return 1 sec left`, () => {
    expect(testTimer.tick()).to.equal(1);
  });
  it(`expect to return 0 sec left`, () => {
    expect(testTimer.tick()).to.equal(0);
  });
  it(`expect string with "timeleft" message`, () => {
    expect(testTimer.tick()).to.be.a.string(`Время вышло`);
  });
});
