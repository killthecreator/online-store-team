import { Controller } from "../";
export class NonFoundController extends Controller {
  url: string;
    constructor(url: string) {
        super();
        this.url = url;
    }

    setupPage(): void {
      console.log(404);
  }
}
