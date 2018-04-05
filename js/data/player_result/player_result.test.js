import {
  expect
} from 'chai';
import showPlayerResult from './player_result';

const testPlayerResult1 = {
  points: 20,
  lifeLeft: 2,
  timeLeft: 10
};
const testPlayerResult2 = {
  points: 14,
  lifeLeft: 1,
  timeLeft: 10
};
const losePlayerResult = {
  points: 5,
  lifeLeft: 0,
  timeLeft: 40
};
const timeleftPlayerResult = {
  points: 15,
  lifeLeft: 2,
  timeLeft: 0
};

const testResults1 = [20, 15, 1, 6, 12, 18];
const testResults2 = [0, 0, 0, 0, 0, 0];
const testResults3 = [10, 15, 1, 6, 12, 18];
const testResults4 = [20, 20, 20, 20, 20, 20];

describe(`playerResult function`, () => {
  it(`expect lose string`, () => {
    expect(showPlayerResult(testResults1, losePlayerResult)).to.have.string(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`expect timeleft string`, () => {
    expect(showPlayerResult(testResults1, timeleftPlayerResult)).to.have.string(`Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`expect win string`, () => {
    expect(showPlayerResult(testResults1, testPlayerResult2)).to.be.a.string(`Вы заняли 4-ое место из 7 игроков. Это лучше, чем у 42% игроков`);
  });
  it(`expect top win string in loser array`, () => {
    expect(showPlayerResult(testResults2, testPlayerResult2)).to.be.a.string(`Вы заняли 1-ое место из 7 игроков. Это лучше, чем у 85% игроков`);
  });
  it(`expect top win string in normal array`, () => {
    expect(showPlayerResult(testResults3, testPlayerResult1)).to.be.a.string(`Вы заняли 1-ое место из 7 игроков. Это лучше, чем у 85% игроков`);
  });
  it(`expect top win string in top rated players array`, () => {
    expect(showPlayerResult(testResults4, testPlayerResult1)).to.be.a.string(`Вы заняли 1-ое место из 7 игроков. Это лучше, чем у 85% игроков`);
  });
});
