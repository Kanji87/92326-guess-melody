const playerPlaceEndings = (num) => {
  let ending;
  if (num % 100 === 13) {
    ending = `-ое`;
  } else if (num % 10 === 3) {
    ending = `-е`;
  } else {
    ending = `-ое`;
  }
  return ending;
};

const showPlayerResult = (arr, playerResult) => {
  let resultString;
  if (playerResult.lifeLeft === 0) {
    resultString = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (playerResult.timeLeft === 0) {
    resultString = `Время вышло! Вы не успели отгадать все мелодии`;
  } else {
    const results = [...arr];
    results.push(playerResult.points);
    results.sort((a, b) => {
      return b - a;
    });
    const playersCount = results.length;
    const playerPlace = results.indexOf(playerResult.points) + 1;
    const playerRating = Math.floor((playersCount - playerPlace) / playersCount * 100);
    resultString = `Вы заняли ${playerPlace}${playerPlaceEndings(playerPlace)} место из ${playersCount} игроков. Это лучше, чем у ${playerRating}% игроков`;
  }
  return resultString;
};

export default showPlayerResult;
