import './home.css';

export class HomeView {
  constructor () {

  }

  public draw = () => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.innerHTML = `
    // ВОПРОС: может засунуть все иннер хтмли в модель, сделать один метод вью,
    в параметры ему передавать селектор, и в зависимости от селектора
    поставлять соответствующий иннер хтмл???
    тогда был бы один класс вью, и не надо было бы плодить эти папки
    `;
  }
}
