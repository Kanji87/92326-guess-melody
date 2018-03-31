import createTemplate from './create_template';
import renderTemplate from './render_template';
import welcome from './welcome';

const resultTimeout = createTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

document.addEventListener(`click`, (ect) => {
  if (ect.target.classList.contains(`main-replay`)) {
    renderTemplate(welcome);
  }
});

export default resultTimeout;
