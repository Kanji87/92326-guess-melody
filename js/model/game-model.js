const INITIAL_STATE = Object.freeze({
  lifeCount: 3,
  minutesCount: 5,
  secondsCount: `0${0}`,
  level: 1,
  points: 0,
  answerCount: 0,
  fastAnswerCount: 0
});

export default class GameModel {
  constructor(data) {
    this.levels = data;
    this._state = Object.assign({}, INITIAL_STATE);
  }

  get hasNextLevel() {
    return this.levels[this._state.level] !== void 0;
  }

  increaseLevel() {
    return this._state.level++;
  }

  get state() {
    return this._state;
  }

  get isTimeEnd() {
    return !this._state.minutesCount && this._state.secondsCount === `00`;
  }

  get currentLevel() {
    return this._state.level;
  }

  get isLifeEnd() {
    return this._state.lifeCount <= 0;
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

  static levelsAdapter(data) {
    const levelsArray = [];
    for (let i = 0; i < data.length; i++) {
      const levelData = {};
      levelData.correctAnswerNum = 0;
      if (data[i].type === `artist`) {
        const artistList = [];
        for (let answer of data[i].answers) {
          const artist = {};
          artist.artist = answer.title;
          artist.image = answer.image.url;
          artist.name = answer.title;
          artistList.push(artist);
        }
        levelData.type = data[i].type;
        levelData.artistList = artistList;
        levelData.correctAnswerSrc = data[i].src;
        levelData.correctAnswerArtist = levelData.artistList[0].artist;
      } else {
        const genreList = [];
        for (let answer of data[i].answers) {
          const genreItem = {};
          genreItem.genre = answer.genre;
          genreItem.src = answer.src;
          genreList.push(genreItem);
        }
        levelData.type = data[i].type;
        levelData.genreList = genreList;
        levelData.correctAnswerSrc = levelData.genreList[0].src;
        levelData.correctAnswerGenre = levelData.genreList[0].genre;
      }
      levelsArray.push(levelData);
    }
    return levelsArray;
  }
}
