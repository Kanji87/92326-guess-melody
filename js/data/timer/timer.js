const addTimer = (gameTime) => {
  const timer = {
    timeNum: gameTime,
    tick: () => {
      if (timer.timeNum < 0) {
        return `Время вышло`;
      }
      return timer.timeNum--;
    }
  };
  return timer;
};

export default addTimer;
