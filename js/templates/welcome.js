import createTemplate from './create_template';
import renderTemplate from './render_template';
import artist from './artist';

const rules = `
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
`;

const welcome = createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    ${rules}
  </section>
`);

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-play`)) {
    renderTemplate(artist);
  }
});

export default welcome;
