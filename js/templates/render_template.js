const renderTemplate = (domNode) => {
  const mainSection = document.querySelector(`.app`);
  mainSection.innerHTML = ``;
  mainSection.appendChild(domNode);
};

export default renderTemplate;
