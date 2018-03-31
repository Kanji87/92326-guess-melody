import createTemplate from './create_template';
import renderTemplate from './render_template';
import welcome from './welcome';

const resultLose = createTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

document.addEventListener(`click`, (ect) => {
  if (ect.target.classList.contains(`main-replay`)) {
    renderTemplate(welcome);
  }
});

export default resultLose;
