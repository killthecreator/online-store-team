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
}
