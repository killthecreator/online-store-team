import { Controller } from '../';
export class HomeController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(): void {
        console.log('home');
    }
}
