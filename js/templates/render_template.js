const renderTemplate = (domNode) => {
  const mainSection = document.querySelector(`.main`);
  mainSection.innerHTML = ``;
  mainSection.appendChild(domNode);
};

export default renderTemplate;
