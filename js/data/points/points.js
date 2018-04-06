const getPoints = (answers, lifeLeft) => {
  const startLifeNum = 2;
  let correctAnswersNum = 0;
  let fastAnswerNum = 0;
  let points = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i][0]) {
      correctAnswersNum++;
    }
    if (answers[i][1] < 30) {
      fastAnswerNum++;
    }
  }

  if (correctAnswersNum === 10) {
    const slowAnswerNum = correctAnswersNum - fastAnswerNum;
    points = slowAnswerNum + (fastAnswerNum * 2) + ((lifeLeft - startLifeNum) * 2);
  } else {
    points = -1;
  }
  return points;
};

export default getPoints;
