import createTemplate from './create_template';
import {gameData} from '../data/data';

const mainWrap = document.querySelector(`.app .main`);
const lifebar = (lifesLeft) => createTemplate(`
<div class="main-mistakes">
  ${new Array(lifesLeft).fill(`
  <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
</div>
`);

const renderLifebar = () => {
  if (document.querySelector(`.main-mistakes`)) {
    document.querySelector(`.main-mistakes`).remove();
  }
  mainWrap.querySelector(`.main`).insertBefore(lifebar(gameData.lifeCount), mainWrap.querySelector(`.main-wrap`));
};

export default renderLifebar;
