const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getRandomItems = (num, arr) => {
  let itemsArray = [...arr];
  shuffle(itemsArray);
  itemsArray = itemsArray.slice(0, num);
  return itemsArray;
};

export default getRandomItems;
