import { Controller } from '../';
import { PageNotFoundView } from '../../view/404/';
import { URL } from '../../../utils/urlInterface';
export class PageNotFoundController extends Controller {
    url: Partial<URL>;
    constructor() {
        super();
        this.url = {};
    }

    setupPage(view: PageNotFoundView): void {
        view.drawHeader();
        view.drawMain();
        view.drawFooter();
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
