import { Controller } from '../';
import { PageNotFoundView } from '../../view/404/';
export class PageNotFoundController extends Controller {
    url: Partial<{
        big: string;
        sort: string;
        search: string;
        categories: string;
        brands: string;
        price: string;
        stock: string;
    }>;
    constructor() {
        super();
        this.url = {};
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
