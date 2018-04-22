const createTemplate = (templateString) => {
  const dummyWrap = document.createElement(`div`);
  dummyWrap.innerHTML = templateString.trim();
  return dummyWrap.firstChild;
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`AbstactView нельзя присваивать`);
    }
  }

  get template() {
    throw new Error(`Необходим шаблон для вывода`);
  }

  render() {
    return createTemplate(this.template);
  }

  bind(element) {
    // тут будем задавать события для вьюх
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}
