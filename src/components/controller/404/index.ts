import { Controller } from "../";
export class NonExistingController extends Controller {
  /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(): void {
      console.log(404);
  }
}
