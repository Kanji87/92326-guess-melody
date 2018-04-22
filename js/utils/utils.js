const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const getRandomItems = (num, arr) => {
  let itemsArray = [...arr];
  shuffle(itemsArray);
  itemsArray = itemsArray.slice(0, num);
  return itemsArray;
};

export const createTemplate = (templateString) => {
  const dummyWrap = document.createElement(`div`);
  dummyWrap.innerHTML = templateString.trim();
  return dummyWrap.firstChild;
};

export const renderTemplate = (domNode) => {
  const mainSection = document.querySelector(`.main`);
  mainSection.innerHTML = ``;
  mainSection.appendChild(domNode);
};

export const initAudioPlayer = () => {
  const playButtons = document.querySelectorAll(`.player-control`);
  playButtons.forEach((playButton) => {
    playButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const audio = evt.target.closest(`.player`).querySelector(`audio`);
      const audioPlayers = document.querySelectorAll(`audio`);
      if (audio.paused) {
        audioPlayers.forEach((audioPlayer) => {
          audioPlayer.pause();
          audioPlayer.closest(`.player`).querySelector(`.player-control`).classList.remove(`player-control--pause`);
        });
        audio.play();
        playButton.classList.add(`player-control--pause`);
      } else {
        audio.pause();
        playButton.classList.remove(`player-control--pause`);
      }
    });
  });
};
