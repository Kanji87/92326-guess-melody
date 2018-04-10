import createTemplate from './create_template';
import renderTemplate from './render_template';
import timerTemplate from './timer';
import lifebar from './lifebar';
import genre from './genre';

const artistAnswerItem = `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
    <label class="main-answer" for="answer-1">
      <img class="main-answer-preview" src="http://placehold.it/134x134"
          alt="Пелагея" width="134" height="134">
      Пелагея
    </label>
  </div>
`;

const artist = createTemplate(`
  <section class="main main--level main--level-artist">
    ${timerTemplate}
    ${lifebar}
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${artistAnswerItem}
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                alt="Краснознаменная дивизия имени моей бабушки" width="134" height="134">
            Краснознаменная дивизия имени моей бабушки
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3"/>
          <label class="main-answer" for="answer-3">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                alt="Lorde" width="134" height="134">
            Lorde
          </label>
        </div>
      </form>
    </div>
  </section>
`);

document.addEventListener(`click`, (evt) => {
  if (evt.target.closest(`.main-answer`)) {
    renderTemplate(genre);

    const answerButton = document.querySelector(`.genre-answer-send`);
    answerButton.setAttribute(`disabled`, `disabled`);

    document.addEventListener(`click`, (answerEvt) => {
      if (answerEvt.target.closest(`.genre-answer`)) {
        answerButton.removeAttribute(`disabled`);
      }
    });
  }
});

export default artist;
