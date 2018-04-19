import createTemplate from './create_template';
import showPlayerResult from '../player_result/player_result';
import {gameData} from '../data/data';

const testResults1 = [20, 15, 1, 6, 12, 18];

const result = (gameResult) => createTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${gameData.points} баллов (${gameData.fastAnswerCount} быстрых)
      <br>совершив ${3 - gameData.lifeCount} ошибки</div>
    <span class="main-comparison">${showPlayerResult(testResults1, gameResult)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

export default result;
