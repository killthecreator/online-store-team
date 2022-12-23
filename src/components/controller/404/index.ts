import { Controller } from "../";
export class NonExistingController extends Controller {
  /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(): void {
      console.log(404);

      this.configPage();
    }

    configPage() {
      this.turnOffSearch();
    }

    turnOffSearch() {
      const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
      if (!search) throw new Error("there is no search block");
      search.style.display = "none";
    }
}
