import { Controller } from '../';
import { Model } from '../../model/';
import { NonExistingView } from '../../view/404/';
export class NonExistingController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(location: string, view: NonExistingView, model: Model): void {
        view.drawMain();
    }

    configPage() {
        this.turnOffSearch();
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }
}
