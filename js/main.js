'use sctrict';
const mainSection = document.querySelector(`.main`);
const sectionsTemplate = document.querySelector(`#templates`).content;
const welcomeSection = sectionsTemplate.querySelector(`.main--welcome`);
const genreSection = sectionsTemplate.querySelector(`.main--level-genre`);
const artistSection = sectionsTemplate.querySelector(`.main--level-artist`);
const winSection = sectionsTemplate.querySelectorAll(`.main--result`)[0];
const timeoutSection = sectionsTemplate.querySelectorAll(`.main--result`)[1];
const loseSection = sectionsTemplate.querySelectorAll(`.main--result`)[2];
const templateSections = [
  welcomeSection,
  genreSection,
  artistSection,
  winSection,
  timeoutSection,
  loseSection
];

const fragment = document.createDocumentFragment();

const showSection = (sectionNum) => {
  const sectionToShow = templateSections[sectionNum].cloneNode(true);
  const fragmentFromSection = fragment.appendChild(sectionToShow);
  mainSection.innerHTML = ``;
  mainSection.appendChild(fragmentFromSection);
};

showSection(0);
