import { Controller } from '../';
import { PageNotFoundView } from '../../view/404/';
export class PageNotFoundController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(location: string, view: PageNotFoundView): void {
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
