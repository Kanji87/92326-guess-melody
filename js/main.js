import renderTimer from './templates/timer';
import WelcomeView from './views/welcome_view';
import ArtistView from './views/artist_view';
import GenreView from './views/genre_view';
import ResultView from './views/result_view';
import renderLifebar from './templates/lifebar';
import {levels, gameData} from './data/data';
import {initAudioPlayer, renderTemplate} from './utils/utils';
import LoseView from './views/lose_view';

const welcomeView = new WelcomeView();

const getLevel = () => gameData.level;

const restartGame = () => {
  gameData.level = 1;
  gameData.points = 0;
  gameData.lifeCount = 3;
  gameData.timeCount = 5;
  renderTemplate(welcomeView.element);
};

const goToNextLevel = (levelType) => {
  if (gameData.lifeCount < 0) {
    const result = new LoseView(gameData);
    renderTemplate(result.element);
    result.onReplayClick = () => {
      restartGame();
    };
  } else {
    if (levelType === `genre`) {
      const genreView = new GenreView();
      renderTemplate(genreView.element);
      renderLifebar();
      renderTimer();
      initAudioPlayer();

      genreView.onGenreSelect = () => {
        const submitButton = document.querySelector(`.genre-answer-send`);
        let selectedCheckboxes = document.querySelectorAll(`.genre-answer input:checked`).length;
        if (selectedCheckboxes) {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      };

      genreView.onSubmit = (genre) => {
        const answers = document.querySelectorAll(`.genre-answer input:checked`);
        let isCorrect = false;
        answers.forEach((answer) => {
          if (answer.value === genre) {
            isCorrect = true;
          } else {
            isCorrect = false;
          }
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
    } else if (levelType === `artist`) {
      const artistView = new ArtistView(getLevel());
      renderTemplate(artistView.element);
      renderLifebar();
      renderTimer();
      initAudioPlayer();

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
    } else if (gameData.level > levels.length) {
      const result = new ResultView(gameData);
      renderTemplate(result.element);
      result.onReplayClick = () => {
        restartGame();
      };
    }
  }
};

renderTemplate(welcomeView.element);

welcomeView.onPlayClick = () => {
  goToNextLevel(levels[gameData.level - 1].levelType);
};
