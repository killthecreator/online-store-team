import './home.css';
import { Data } from './../../../../data';
import { Model } from './../../model';
import { HomeController } from './../../controller/home';
//TODO написать функции которые
//     -  находят и возвращают
//         findMinPrice() -- минимальную цену которая только есть cреди товаров
//         findMaxPrice() -- максимальную цену
//         findMinStock() -- минимальное колічество товаров на складе
//         findMaxStock() -- максимальное количество товаров на складе
//         sortOptions()  -- обработка селекта селекта sort options
//         found()        -- сколько товаров в данный момент отбражается на странице
//         addToCart()    -- добавляет товар в корзину
//         brandLogo(brandName) получает название бренда и возвращает ссылку на его лого

export class HomeView {
  constructor () {

  }

  public draw = () => {
    const filters = this.drawFilters();
    const ranges = this.drawRanges();
    const buttons = this.drawButtons();
    const cards = this.drawCards(Model.data);

    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.append(filters);
    mainDiv.append(ranges);
    mainDiv.append(buttons);
    mainDiv.append(cards);
  }

  private drawFilters = () => {
    const categoryForm = document.createElement("form");
    categoryForm.classList.add("category-form");
    const labelsArr = []; //на всякий случай. если не надо - можно удалить
    Model.categories.forEach(category => {
      const someInput = document.createElement("input");
      someInput.type = "checkbox";
      someInput.classList.add("category-form__checkbox");
      const someLabel = document.createElement("label");
      someLabel.classList.add("category-form__label");
      someLabel.innerHTML = `${someInput} ${category}`;
      labelsArr.push(someLabel);
      categoryForm.append(someLabel);
    })

    const brandForm = document.createElement("form");
    brandForm.classList.add("brand-form");
    Model.brands.forEach(brand => {
      const someInput = document.createElement("input");
      someInput.type = "checkbox";
      someInput.classList.add("brand-form__checkbox");
      const someLabel = document.createElement("label");
      someLabel.classList.add("brand-form__label");
      someLabel.innerHTML = `${someInput} ${brand}`;
      labelsArr.push(someLabel);
      categoryForm.append(someLabel);
    })

    const filters = document.createElement('section');
    filters.append(categoryForm);
    filters.append(brandForm);

    return filters;
  }

  private drawRanges = () => {

    const priceRange = document.createElement("div");
    priceRange.classList.add("price-range");
    const priceRangeInput = document.createElement("input");
    priceRangeInput.type = "range";
    priceRangeInput.classList.add("price-range__input");
    priceRangeInput.min = HomeController.findMinPrice();
    priceRangeInput.min = HomeController.findMaxPrice();

    const stockRange = document.createElement("div");
    stockRange.classList.add("stock-range");
    const stockRangeInput = document.createElement("input");
    stockRangeInput.type = "range";
    stockRangeInput.classList.add("stock-range__input");
    stockRangeInput.min = HomeController.findMinStock();
    stockRangeInput.min = HomeController.findMaxStock();

    const ranges = document.createElement('section');
    ranges.classList.add("ranges");
    ranges.append(priceRange);
    ranges.append(stockRange);

    return ranges;
  }

  private drawButtons = () => {
    const resetFilters = document.createElement('button');
    resetFilters.classList.add("button");
    resetFilters.classList.add("reset-filters");

    const copyLink = document.createElement('button');
    copyLink.classList.add("button");
    copyLink.classList.add("copy-link");

    const sortOptions = document.createElement('select');
    sortOptions.classList.add("sort-options");
    sortOptions.addEventListener("change", HomeController.sortOptions);
    sortOptions.innerHTML = `
      <option value="priceASC">Sort by price ASC</option>
      <option value="priceDESC">Sort by price DESC</option>
      <option value="nameASC">Sort by name ASC</option>
      <option value="nameDESC">Sort by name DESC</option>
    `;

    const found = document.createElement("div");
    found.classList.add("found");
    found.innerHTML = `Found: ${HomeController.found()}`;

    const viewChange = document.createElement('div');
    viewChange.classList.add("view-change");
    const viewChangeButton1 = document.createElement('button');
    viewChangeButton1.classList.add("view-change__button");
    const viewChangeButton2 = document.createElement('button');
    viewChangeButton2.classList.add("view-change__button");
    viewChange.append(viewChangeButton1);
    viewChange.append(viewChangeButton2);

    const buttons = document.createElement('section');
    buttons.classList.add("buttons");
    buttons.append(resetFilters);
    buttons.append(copyLink);
    buttons.append(sortOptions);
    buttons.append(found);
    buttons.append(viewChange);

    return buttons;
  }

  drawCards = (crads: Data[]) => {
    const cardsWrapper = document.createElement('section');
    cardsWrapper.classList.add("cards-wrapper");
    const cardsArr = [];
    crads.forEach((card: Data) => {
      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add("card-wrapper");
      const photoZone = document.createElement('div');
      photoZone.classList.add("photo-zone");
      photoZone.style.backgroundImage = `url(${card.photos[0]})`;
      photoZone.innerHTML=`
      <div class="photo-zone__store">
        Store: ${card.amount}
      </div>
      <div class="photo-zone__buttons">
        <div class="photo-zone__product">
         <button class="photo-zone__product-button" onclick="document.location='/product'"></button>
        </div>
        <div class="photo-zone__add-to-cart">
          <button class="photo-zone__add-to-cart-button" onclick="HomeController.addToCart"></button>
        </div>
      </div>
      `;

      const nameZone = document.createElement('div');
      nameZone.classList.add("name-zone");
      const brand = document.createElement('div');
      brand.classList.add("name-zone__brand");
      brand.style.backgroundImage = `url(${HomeController.brandLogo(card.brand)})`;
      nameZone.append(brand);
      const titles = document.createElement('div');
      brand.classList.add("name-zone__titles");
      titles.innerHTML = `
        <h4 class="name-zone__name">${card.name}</h4>
        <p class="name-zone__category">${card.category}</p>
      `;
      nameZone.append(titles);
      const price = document.createElement('div');
      price.classList.add("name-zone__price");
      price.innerHTML = `${card.price}$`;
      nameZone.append(price);

      cardWrapper.append(photoZone);
      cardWrapper.append(nameZone);

      cardsArr.push(cardWrapper);
      cardsWrapper.append(cardWrapper);
    });

    return cardsWrapper;
  }

}
