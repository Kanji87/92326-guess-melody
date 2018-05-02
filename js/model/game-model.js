import Utils from '../utils/utils';

const INITIAL_STATE = Object.freeze({
  lifeCount: 3,
  minutesCount: 5,
  secondsCount: `0${0}`,
  level: 1,
  points: 0,
  answerCount: 0,
  fastAnswerCount: 0
});

const APP_ID = 22101985;
const SEND_RESULT_URL = `https://es.dump.academy/guess-melody/stats/${APP_ID}`;

export default class GameModel {
  constructor(data) {
    this.levels = data;
    this._state = Object.assign({}, INITIAL_STATE);
  }

  get hasNextLevel() {
    return this.levels[this._state.level] !== void 0;
  }

  get state() {
    return this._state;
  }

  get isTimeEnd() {
    return !this._state.minutesCount && this._state.secondsCount === `00`;
  }

  get isLifeEnd() {
    return this._state.lifeCount <= 0;
  }

  increaseLevel() {
    return this._state.level++;
  }

  timer() {
    if (this._state.secondsCount > 0) {
      this._state.secondsCount = this._state.secondsCount < 10 ? `0${this._state.secondsCount - 1}` : this._state.secondsCount - 1;
    } else {
      this._state.secondsCount = 59;

      if (this._state.minutesCount > 0) {
        this._state.minutesCount--;
      } else {
        this._state.minutesCount = 0;
      }
    }
  }

  sendResult(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SEND_RESULT_URL}`, requestSettings)
        .then((response) => Utils.checkResponseStatus(response));
  }

  getStats() {
    return fetch(SEND_RESULT_URL)
        .then(Utils.checkResponseStatus)
        .then((response) => response.json());
  }

  static buildArtistLevel(dataObj) {
    const artistList = [];
    for (let answer of dataObj.answers) {
      const artist = {
        artist: answer.title,
        image: answer.image.url,
        name: answer.title
      };
      artistList.push(artist);
    }
    return artistList;
  }

  static buildGenrelevel(dataObj) {
    const genreList = [];
    for (let answer of dataObj.answers) {
      const genreItem = {
        genre: answer.genre,
        src: answer.src
      };
      genreList.push(genreItem);
    }
    return genreList;
  }

  static levelsAdapter(data) {
    const levelsArray = [];
    for (let dataItem of data) {
      const levelData = {};
      levelData.correctAnswerNum = 0;
      if (dataItem.type === `artist`) {
        levelData.type = dataItem.type;
        levelData.artistList = GameModel.buildArtistLevel(dataItem);
        levelData.correctAnswerSrc = dataItem.src;
        levelData.correctAnswerArtist = levelData.artistList[0].artist;
      } else {
        levelData.type = dataItem.type;
        levelData.genreList = GameModel.buildGenrelevel(dataItem);
        levelData.correctAnswerSrc = levelData.genreList[0].src;
        levelData.correctAnswerGenre = levelData.genreList[0].genre;
      }
      levelsArray.push(levelData);
    }
    return levelsArray;
  }

  static playerPlaceEndings(num) {
    let ending;
    if (num % 100 === 13) {
      ending = `-ое`;
    } else if (num % 10 === 3) {
      ending = `-е`;
    } else {
      ending = `-ое`;
    }
    return ending;
  }

  static showPlayerResult(arr, playerResult) {
    if (playerResult.lifeCount === 0) {
      return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    } else if (playerResult.timeCount === 0) {
      return `Время вышло! Вы не успели отгадать все мелодии`;
    } else {
      const results = [...arr];
      results.push(playerResult.points);
      results.sort((a, b) => {
        return b - a;
      });
      const playersCount = results.length - 1;
      const playerPlace = results.indexOf(playerResult.points) + 1;
      const playerRating = Math.floor((playersCount - playerPlace) / playersCount * 100);
      return `Вы заняли ${playerPlace}${GameModel.playerPlaceEndings(playerPlace)} место из ${playersCount} игроков. Это лучше, чем у ${playerRating}% игроков`;
    }
  }
}
