import WelcomeView from '../views/welcome-view';
import ErrorView from '../views/error-view';
import LoseView from '../views/lose-view';
import LoadView from '../views/loading-view';
import GameModel from '../model/game-model';
import GameScreen from '../screens/game-screen';

const rootNode = document.querySelector(`.app`);

const levelsAdapter = (data) => {
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
};

export default class App {
  static loadGame() {
    const loadView = new LoadView();
    App._changeViewTo(loadView.element);
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
        then(App._checkResponseStatus).
        then((response) => response.json()).
        then((data) => levelsAdapter(data)).
        then(App.showWelcome).
        catch(App.showError);
  }

  static showWelcome(data) {
    const welcome = new WelcomeView(new GameModel().state, data);
    App._changeViewTo(welcome.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    App._changeViewTo(errorView.element);
  }

  static runGame(data) {
    const gameScreen = new GameScreen(new GameModel(data));
    App._changeViewTo(gameScreen.element);
    gameScreen.goToNextLevel();
  }

  static showLoseResult() {
    const result = new LoseView(new GameModel().state);
    App._changeViewTo(result.element);
  }

  static _changeViewTo(element) {
    rootNode.innerHTML = ``;
    rootNode.appendChild(element);
  }

  static _checkResponseStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }
}
