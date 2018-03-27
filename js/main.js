'use sctrict';

const ALT_KEYCODE = 18;
const RIGHT_KEYCODE = 39;
const LEFT_KEYCODE = 37;

const keycodes = [
  ALT_KEYCODE,
  RIGHT_KEYCODE,
  LEFT_KEYCODE
];
let keycodesMap = {
  18: false,
  37: false,
  39: false
};

const mainSection = document.querySelector(`.main`);
const sectionsTemplate = document.querySelector(`#templates`).content;
const welcomeSection = sectionsTemplate.querySelector(`.main--welcome`);
const genreSection = sectionsTemplate.querySelector(`.main--level-genre`);
const artistSection = sectionsTemplate.querySelector(`.main--level-artist`);
const winSection = sectionsTemplate.querySelectorAll(`.main--result`)[0];
const timeoutSection = sectionsTemplate.querySelectorAll(`.main--result`)[1];
const loseSection = sectionsTemplate.querySelectorAll(`.main--result`)[2];
let currentSectionNum;

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
  currentSectionNum = sectionNum;
};

const showNextSection = () => {
  if (currentSectionNum !== templateSections.length - 1) {
    showSection(currentSectionNum + 1);
  }
  return false;
};

const showPrevSection = () => {
  if (currentSectionNum !== 0) {
    showSection(currentSectionNum - 1);
  }
  return false;
};

showSection(0);

document.addEventListener(`keydown`, (e) => {
  if (keycodes.includes(e.keyCode)) {
    keycodesMap[e.keyCode] = true;
    if (keycodesMap[ALT_KEYCODE] && keycodesMap[RIGHT_KEYCODE]) {
      showNextSection();
    } else if (keycodesMap[ALT_KEYCODE] && keycodesMap[LEFT_KEYCODE]) {
      showPrevSection();
    }
  }
});

document.addEventListener(`keyup`, (e) => {
  if (keycodes.includes(e.keyCode)) {
    keycodesMap[e.keyCode] = false;
  }
});
