import {expect} from 'chai';
// import showPlayerResult from './result';
import ResultView from '../views/result-view';

const testPlayerResult1 = {
  points: 20,
  lifeCount: 2,
  timeCount: 10
};
const testPlayerResult2 = {
  points: 14,
  lifeCount: 1,
  timeCount: 10
};
const testPlayerResult3 = {
  points: 16,
  lifeCount: 1,
  timeCount: 10
};
const losePlayerResult = {
  points: 5,
  lifeCount: 0,
  timeCount: 40
};
const timeCountPlayerResult = {
  points: 15,
  lifeCount: 2,
  timeCount: 0
};

const testResults1 = [20, 15, 1, 6, 12, 18];
const testResults2 = [0, 0, 0, 0, 0, 0];
const testResults3 = [10, 15, 1, 6, 12, 18];
const testResults4 = [20, 20, 20, 20, 20, 20];

const resultStrings = {
  lifeEnded: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  timeEnded: `Время вышло! Вы не успели отгадать все мелодии`,
  fourthPlace: `Вы заняли 4-ое место из 7 игроков. Это лучше, чем у 42% игроков`,
  thirdPlace: `Вы заняли 3-е место из 7 игроков. Это лучше, чем у 57% игроков`,
  firstPlace: `Вы заняли 1-ое место из 7 игроков. Это лучше, чем у 85% игроков`
};

describe(`playerResult function`, () => {
  it(`expect lose string`, () => {
    expect(ResultView._showPlayerResult(testResults1, losePlayerResult)).to.have.string(resultStrings.lifeEnded);
  });
  it(`expect timeCount string`, () => {
    expect(ResultView._showPlayerResult(testResults1, timeCountPlayerResult)).to.have.string(resultStrings.timeEnded);
  });
  it(`expect win string`, () => {
    expect(ResultView._showPlayerResult(testResults1, testPlayerResult2)).to.be.a.string(resultStrings.fourthPlace);
  });
  it(`expect 3 place win string`, () => {
    expect(ResultView._showPlayerResult(testResults1, testPlayerResult3)).to.be.a.string(resultStrings.thirdPlace);
  });
  it(`expect top win string in loser array`, () => {
    expect(ResultView._showPlayerResult(testResults2, testPlayerResult2)).to.be.a.string(resultStrings.firstPlace);
  });
  it(`expect top win string in normal array`, () => {
    expect(ResultView._showPlayerResult(testResults3, testPlayerResult1)).to.be.a.string(resultStrings.firstPlace);
  });
  it(`expect top win string in top rated players array`, () => {
    expect(ResultView._showPlayerResult(testResults4, testPlayerResult1)).to.be.a.string(resultStrings.firstPlace);
  });
});
