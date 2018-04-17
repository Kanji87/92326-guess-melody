import createTemplate from './create_template';
import renderTemplate from './render_template';
import artist from './artist';
import renderLifebar from './lifebar';

const welcome = (data) => createTemplate(`
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${data.timeCount} минут ответить на все вопросы.<br>
      Ошибиться можно ${data.lifeCount} раза.<br>
      Удачи!
    </p>
  </section>
`);

const initAudioPlayer = (evt) => {
  const players = document.querySelectorAll(`audio`);
  const playerControls = document.querySelectorAll(`.player-control`);
  const audioPlayer = evt.target.closest(`.player`).querySelector(`audio`);
  if (audioPlayer.paused) {
    players.forEach((player) => {
      player.pause();
    });
    playerControls.forEach((control) => {
      control.classList.remove(`player-control--pause`);
    });
    audioPlayer.play();
    evt.target.classList.add(`player-control--pause`);
  } else {
    audioPlayer.pause();
    evt.target.classList.remove(`player-control--pause`);
  }
};

document.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`main-play`)) {
    renderTemplate(artist);
    renderLifebar();
  }
  if (evt.target.classList.contains(`player-control`)) {
    initAudioPlayer(evt);
  }
});

export default welcome;
