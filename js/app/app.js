import WelcomeView from '../views/welcome-view';
import ErrorView from '../views/error-view';
import LoseView from '../views/lose-view';
import LoadView from '../views/loading-view';
import GameModel from '../model/game-model';
import GameScreen from '../screens/game-screen';
import Utils from '../utils/utils';

const ROOT_NODE = document.querySelector(`.app`);
const LOAD_LEVELS_URL = `https://es.dump.academy/guess-melody/questions`;

export default class App {
  static loadGame() {
    const loadView = new LoadView();
    App._changeViewTo(loadView.element);
    window.fetch(LOAD_LEVELS_URL)
        .then(Utils.checkResponseStatus)
        .then((response) => response.json())
        .then((data) => GameModel.levelsAdapter(data))
        .then(App.showWelcome)
        .catch(App.showError);
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
    ROOT_NODE.innerHTML = ``;
    ROOT_NODE.appendChild(element);
  }
}
