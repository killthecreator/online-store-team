import { Controller } from '../';
import { PageNotFoundView } from '../../view/404/';
import { URL } from '../../../utils/urlInterface';
import { Model } from '../../model/index';
export class PageNotFoundController extends Controller {
    url: Partial<URL>;
    view: PageNotFoundView;
    model: Model;
    constructor(view: PageNotFoundView, model: Model) {
        super();
        this.url = {};
        this.view = view;
        this.model = model;
    }

    setupPage(): void {
        this.view.drawHeader();
        this.view.drawMain();
        this.view.drawFooter();
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
