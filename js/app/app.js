import WelcomeView from '../views/welcome-view';
import ErrorView from '../views/error-view';
import LoseView from '../views/lose-view';
import LoadView from '../views/loading-view';
import GameModel from '../model/game-model';
import GameScreen from '../screens/game-screen';

const rootNode = document.querySelector(`.app`);

export default class App {
  static loadGame() {
    const loadView = new LoadView();
    App._changeViewTo(loadView.element);
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
        then(App._checkResponseStatus).
        then((response) => console.log(response.json())).
        then(App.showWelcome).
        catch(App.showError);
  }

  static showWelcome() {
    const welcome = new WelcomeView(new GameModel().state);
    App._changeViewTo(welcome.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    App._changeViewTo(errorView.element);
  }

  static runGame() {
    const gameScreen = new GameScreen(new GameModel());
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
