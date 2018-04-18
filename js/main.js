import {welcome, initWelcomeEvents} from './templates/welcome';
import renderTemplate from './templates/render_template';
import {gameData} from './data/data';

renderTemplate(welcome(gameData));
initWelcomeEvents();

