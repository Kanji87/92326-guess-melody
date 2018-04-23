import renderTimer from './templates/timer';
import WelcomeView from './views/welcome-view';
import ArtistView from './views/artist-view';
import GenreView from './views/genre-view';
import ResultView from './views/result-view';
import LoseView from './views/lose-view';
import renderLifebar from './templates/lifebar';
import {levels, gameData} from './data/data';
import Utils from './utils/utils';

const welcomeView = new WelcomeView();

const getLevel = () => gameData.level;

const restartGame = () => {
  gameData.level = 1;
  gameData.points = 0;
  gameData.lifeCount = 3;
  gameData.timeCount = 5;
  Utils.renderTemplate(welcomeView.element);
};

const showGenreScreen = () => {
  const genreView = new GenreView();
  Utils.renderTemplate(genreView.element);
  renderLifebar();
  renderTimer();
  Utils.initAudioPlayer();

  genreView.onGenreSelect = () => {
    const submitButton = document.querySelector(`.genre-answer-send`);
    let selectedCheckboxes = document.querySelectorAll(`.genre-answer input:checked`).length;
    submitButton.disabled = selectedCheckboxes ? false : true;
  };

  genreView.onSubmit = (genre) => {
    const answers = document.querySelectorAll(`.genre-answer input:checked`);
    let isCorrect = false;
    answers.forEach((answer) => {
      isCorrect = answer.value === genre ? true : false;
    });
    if (isCorrect) {
      gameData.answerCount++;
      gameData.points += gameData.answerReward;
    } else {
      if (gameData.points === 0) {
        gameData.points = gameData.points;
        gameData.lifeCount -= 1;
      } else {
        gameData.points -= 1;
        gameData.lifeCount -= 1;
      }
    }

    gameData.level++;
    if (gameData.level < levels.length) {
      goToNextLevel(levels[gameData.level - 1].levelType);
    } else {
      goToNextLevel();
    }
  };
};

const showArtistScreen = () => {
  const artistView = new ArtistView(getLevel());
  Utils.renderTemplate(artistView.element);
  renderLifebar();
  renderTimer();
  Utils.initAudioPlayer();

  artistView.onAnswerClick = (answerText) => {
    if (answerText === levels[gameData.level - 1].correctAnswerArtist) {
      gameData.answerCount++;
      gameData.points += gameData.answerReward;
    } else {
      if (gameData.points === 0) {
        gameData.points = gameData.points;
        gameData.lifeCount -= 1;
      } else {
        gameData.points -= 1;
        gameData.lifeCount -= 1;
      }
    }
    gameData.level++;
    goToNextLevel(levels[gameData.level - 1].levelType);
  };
};

const goToNextLevel = (levelType) => {
  if (gameData.lifeCount < 0) {
    const result = new LoseView(gameData);
    Utils.renderTemplate(result.element);
    result.onReplayClick = () => {
      restartGame();
    };
    return;
  }
  if (levelType === `genre`) {
    showGenreScreen();
  } else if (levelType === `artist`) {
    showArtistScreen();
  } else if (gameData.level > levels.length) {
    const result = new ResultView(gameData);
    Utils.renderTemplate(result.element);
    result.onReplayClick = () => {
      restartGame();
    };
  }
};

Utils.renderTemplate(welcomeView.element);

welcomeView.onPlayClick = () => {
  goToNextLevel(levels[gameData.level - 1].levelType);
};
