const addTimer = (gameTime) => {
  const timer = {
    timeNum: gameTime,
    tick: () => {
      if (timer.timeNum < 0) {
        return -1;
      }
      return timer.timeNum--;
    }
  };
  return timer;
};

export default addTimer;

// const addTimer = (gameTime) => {
//   return {
//     timeNum: gameTime,
//     tick: function () {
//       return this.timeNum < 0 ? -1 : this.timeNum--;
//     }
//   };
// };
