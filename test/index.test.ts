import { assert, beforeEach, describe, expect, it } from 'vitest';
import {
    app,
    cartController,
    homeController,
    pageNotFoundController,
    pageNotFoundView,
    productController,
} from '../src/index';

import { URL } from '../src/utils/urlInterface';
import { locationHandler } from '../src/routing/locationHandler';
import { CartController } from '../src/components/controller/cart/';
import { PageNotFoundController } from '../src/components/controller/404/';
import { CartView } from '../src/components/view/cart/';
import { selectorChecker } from '../src/utils/selectorChecker';
import { Product } from '../src/components/model/data';

/**
 * @vitest-environment jsdom
 */

describe('online-store tests', () => {
    beforeEach(() => {
        locationHandler('/home');
        cartController.model.cart = [];
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

    it('locationHandler sould select proper controller in case of wrong location', () => {
        const someLocation = '/hvkhjvkjhv';
        locationHandler(someLocation);
        assert.equal(app.controller, pageNotFoundController);
        assert.equal(app.view, pageNotFoundView);
    });

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
        expect(foundDiv.innerHTML).toContain('10');
    });

    it('config.page should execute all 6 functions', () => {
        let i = 0;
        const fakeCartController = {
            turnOffSearch: () => {
                return i++;
            },
            productAmount: () => {
                return i++;
            },
            areProductsInCart: () => {
                return i++;
            },
            pagination: () => {
                return i++;
            },
            promoCodding: () => {
                return i++;
            },
            modalWindowConfig: () => {
                return i++;
            },
        };
        cartController.configPage.call(fakeCartController);
        expect(i).toBe(6);
    });

    it('should check if correct brand image added', () => {
        const imagePath = '/src/assets/logos/brands/';
        homeController.addLogos();
        const someBrandDiv = selectorChecker(document, '.photo-zone__brand') as HTMLDivElement;
        expect(someBrandDiv.style.backgroundImage).toEqual(`url(${imagePath}${someBrandDiv.id.toLowerCase()}.svg)`);
    });

    it('should create proper product page depending on link', () => {
        const someLocation = 'Jackson%20CBX%20IV%20David%20Ellefson';
        productController.setupPage(someLocation);
        const productName = selectorChecker(document, '.product__description-name');
        expect(productName.textContent).toBe('Jackson CBX IV David Ellefson');
    })

    it('should add products to cart on button "add to cart" click', () => {
      homeController.setupPage('/home');
      const buttonArr: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.photo-zone__add-to-cart-button');

      buttonArr.forEach(button => {
        button.click();
      })
      expect(buttonArr.length).toEqual(cartController.model.cart.length);
    })

    it('should reduce stock amount when adding to cart', () => {
      homeController.setupPage('/home');
      const cardArr: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');
      cardArr.forEach(card => {
        const button = selectorChecker(card, '.photo-zone__add-to-cart-button') as HTMLButtonElement;
        const stockDiv = selectorChecker(card, '.photo-zone__store');
        const myProduct: {
          product: Product;
          amount: number;
      } | undefined = cartController.model.cart.find(product => product.product.name === button.id);
        if(!myProduct) throw new Error('there is no this product in cart');
        const curAmount = myProduct.product.amount + 1;
        button.click();
        const stock = Number( stockDiv.textContent?.slice(7));
        expect(stock).toEqual(curAmount);
      })

    })
});
