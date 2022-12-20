import { Controller } from '../';
import { App } from '../../../index';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { app } from '../../../index';
export class HomeController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(location: string): void {
        const locationArr = location.split('/');
        /*const app = new App('/home', new Model(), new HomeView()/*, new HomeController());*/
        if (locationArr.length === 1) {
          app.view.drawMain(app.model.categories, app.model.brands);
        }
    }

    rangesHandler() {
      function inputHandler() {
        console.log('kuku');
      }
      const slides: NodeListOf<HTMLInputElement> = document.querySelectorAll(".price-range__input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );

      if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
      let priceMin = document.querySelector(".price-range__min" );
      let priceMax = document.querySelector(".price-range__max" );

      window.onload = function(){

        const priceSliders: NodeListOf<HTMLInputElement> = document.querySelectorAll(".price-range__input");
        for( let i = 0; i < priceSliders.length; i++ ){
          if( priceSliders[i].type ==="range" ){
            priceSliders[i].oninput = inputHandler;
            // Manually trigger event first time to display values
            if (priceSliders[i] === null) throw new Error ('Error');

            }
          }
        }



    }
}
