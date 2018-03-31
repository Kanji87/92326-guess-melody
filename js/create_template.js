const createTemplate = (templateString) => {
  const dummyWrap = document.createElement(`div`);
  dummyWrap.innerHTML = templateString.trim();
  return dummyWrap.firstChild;
};

export default createTemplate;
