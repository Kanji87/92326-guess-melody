import WelcomeView from '../views/welcome-view';
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
    gameScreen.startGame();
  }
}
