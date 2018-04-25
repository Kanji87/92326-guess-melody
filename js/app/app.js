import WelcomeView from '../views/welcome-view';
import LoseView from '../views/lose-view';
import GameModel from '../model/game-model';
import GameScreen from '../screens/game-screen';

const rootNode = document.querySelector(`.app`);
const changeViewTo = (element) => {
  rootNode.innerHTML = ``;
  rootNode.appendChild(element);
};

export default class App {
  static showWelcome() {
    const welcome = new WelcomeView(new GameModel().state);
    changeViewTo(welcome.element);
  }

  static runGame() {
    const gameScreen = new GameScreen(new GameModel());
    changeViewTo(gameScreen.element);
    gameScreen.goToNextLevel();
  }

  static showLoseResult() {
    const result = new LoseView(new GameModel().state);
    changeViewTo(result.element);
  }
}
