import { assert, beforeEach, describe, expect, it, test } from 'vitest';
import { app, homeController, pageNotFoundController, pageNotFoundView } from '../src';
//import { homeController} from '../src'
//import { productController } from '../src';
//import { pageNotFoundController } from '../src';
//import { cartController } from '../src';
import { URL } from '../src/utils/urlInterface';
import { locationHandler } from '../src/routing/locationHandler';
import { CartController } from '../src/components/controller/cart';
import { PageNotFoundController } from '../src/components/controller/404';
import { CartView } from '../src/components/view/cart/index';
import { selectorChecker } from '../src/utils/selectorChecker';

/**
 * @vitest-environment jsdom
 */

// link to test examples https://github.com/vitest-dev/vitest/tree/main/examples/mocks/test

// here are some examples from documentaion

//TODO * * * Н А Ш    Т Е С Т О В Ы Й    С Ц Е Н А Р И Й * * * //
/*
реализованы юнит-тесты, использующие различные методы jest – 2 балла за каждую покрытую функию/метод, но не более 20 баллов (процент покрытия каждой функции/метода не учитывается)

всего 10 функций будем тестировать

можно например потестировать:

!!!! готово1)  fillUrl из homeController
      заполняем объект this.url
      тестим разные строки

!!!! готово 2)  тестим локейшн хэндлер, что у нас меняются контроллеры и вью в зависимости от строки урл
3)  turnOffSearch контроллер 404 строка 26 можно проверить стало ли значиение search.style.display = 'none';
4)  cart controller строка 39 configPage проверить все ли фукции запустились - как это проверить?
5)  cart controller строка 602 modalWindowConfig проверить добавился ли на кнопку ивент лисенер - как это проверить?
6)  home controller строка 592 found проверить сколько найдено карточек и отображается ли сообщение что их не найдено
7)  home controller строка 545 configView проверить добавились ли лисенеры кнопкам смены вида
8)  home controller строка 149 configSearch проверить стал ли отображаться инпут поиска, и есть на на нем лисенер на инпут - как это сделать?!
9)  home controller строка 137 addRouting проверить добавились ли лисенеры на нужные элементы
10) product controller строка 18 setuppage есть ли в квери строке называние продукта, находит ли нужный продукт по названию среди всех продуктов, отрабатывают ли методы this.view.drawMain(product); и this.configPage();
*/

describe('online-store tests', () => {
    beforeEach(() => {
        locationHandler('/home');
    });

    it('fillUrl should change app controller url object properly reading page url queries', () => {
        const exampleUrl =
            '/home/?category=guitars↕basses&brand=Ibanez↕B.C.Rich&price=1087↕11232&stock=1↕29&sort=priceDESC&big=false';

        const thisUrl: Partial<URL> = {
            big: 'big=false',
            sort: 'sort=priceDESC',
            categories: 'guitars↕basses',
            brands: 'Ibanez↕B.C.Rich',
            price: '1087↕11232',
            stock: '1↕29',
        };
        const fictiveController = { url: thisUrl };
        homeController.fillUrl.call(fictiveController, exampleUrl);
        expect(fictiveController.url).toEqual(thisUrl);
    });

    it('locationHandler sould select proper controller', () => {
        const e = new Event("click");
        const someLocation = '/hvkhjvkjhv';
        locationHandler(someLocation);
        assert.equal(app.controller, pageNotFoundController);
        assert.equal(app.view, pageNotFoundView);
    })

    it('should change controller and view of the app with page change', () => {
        locationHandler('/cart');
        expect(app.controller).toBeInstanceOf(CartController);
        expect(app.view).toBeInstanceOf(CartView);
    });

    it('should hide search bar in case if page is not found', () => {
        const search = selectorChecker(document, '.search-wrapper') as HTMLElement;
        expect(search.style.display).toEqual('flex');
        locationHandler('/404');
        const notFoundController = app.controller as PageNotFoundController;
        notFoundController.turnOffSearch();
        expect(search.style.display).toEqual('none');
    });

    it('should count nubmer of products and display it', () => {
        app.controller.url = { search: 'Fender' };
        homeController.doSearch();
        homeController.found();
        const foundDiv = selectorChecker(document, '.found');
        expect(parseInt(foundDiv.innerHTML.replace('Found: ', ''))).toBeLessThanOrEqual(10);
    });
});
