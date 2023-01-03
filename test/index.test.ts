import { assert, describe, expect, it, test } from 'vitest';
import { app } from '../src';
//import { homeController} from '../src'
//import { productController } from '../src';
//import { pageNotFoundController } from '../src';
//import { cartController } from '../src';
import { URL } from '../src/utils/urlInterface';
import { fillUrl } from '../src';

/**
 * @vitest-environment jsdom
 */

//import { fillUrl } from '../src';
//import { url } from '../src';

// link to test examples https://github.com/vitest-dev/vitest/tree/main/examples/mocks/test

// here are some examples from documentaion

//TODO * * * Н А Ш    Т Е С Т О В Ы Й    С Ц Е Н А Р И Й * * * //
/*
реализованы юнит-тесты, использующие различные методы jest – 2 балла за каждую покрытую функию/метод, но не более 20 баллов (процент покрытия каждой функции/метода не учитывается)

всего 10 функций будем тестировать

можно например потестировать:

1)  fillUrl из homeController
      заполняем объект this.url
      тестим разные строки

2)  тестим локейшн хэндлер, что у нас меняются контроллеры и вью в зависимости от строки урл
3)  turnOffSearch контроллер 404 строка 26 можно проверить стало ли значиение search.style.display = 'none';
4)  cart controller строка 39 configPage проверить все ли фукции запустились - как это проверить?
5)  cart controller строка 602 modalWindowConfig проверить добавился ли на кнопку ивент лисенер - как это проверить?
6)  home controller строка 592 found проверить сколько найдено карточек и отображается ли сообщение что их не найдено
7)  home controller строка 545 configView проверить добавились ли лисенеры кнопкам смены вида
8)  home controller строка 149 configSearch проверить стал ли отображаться инпут поиска, и есть на на нем лисенер на инпут - как это сделать?!
9)  home controller строка 137 addRouting проверить добавились ли лисенеры на нужные элементы
10) product controller строка 18 setuppage есть ли в квери строке называние продукта, находит ли нужный продукт по названию среди всех продуктов, отрабатывают ли методы this.view.drawMain(product); и this.configPage();
*/
// 1 попытка сделать тест но он падает. ReferenceError: window is not defined

describe('online-store tests', () => {
    it('fillUrl sould fill url properly', () => {
        const urlObj = {};
        const exampleUrl =
            '/home/?category=guitars↕basses&brand=Ibanez↕B.C.Rich&price=1087↕11232&stock=1↕29&sort=priceDESC&big=false';

        const thisUrl: Partial<URL> = {
            big: 'false',
            sort: 'priceDESC',
            categories: 'guitars↕basses',
            brands: 'Ibanez↕B.C.Rich',
            price: '1087↕11232',
            stock: '1↕29',
        };
        fillUrl.call(urlObj, exampleUrl);
        assert.equal(urlObj, thisUrl);
    });
});
//////////////////////////////////
describe('suite name', () => {
    it('foo', () => {
        assert.equal(Math.sqrt(4), 2);
    });

    it('bar', () => {
        expect(1 + 1).eq(2);
    });

    it('snapshot', () => {
        expect({ foo: 'bar' }).toMatchSnapshot();
    });
});

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(144)).toBe(12);
    expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('JSON', () => {
    const input = {
        foo: 'hello',
        bar: 'world',
    };

    const output = JSON.stringify(input);

    expect(output).eq('{"foo":"hello","bar":"world"}');
    assert.deepEqual(JSON.parse(output), input, 'matches original');
});
