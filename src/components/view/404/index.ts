import './404.scss';
import { GlobalView } from '../index';

export class NonExistingView extends GlobalView {
    constructor() {
        super();
    }

    public drawMain = () => {
        let main = document.querySelector('.main');
        if (!main) {
            main = document.createElement('main');
            main.classList.add('main');
            document.body.append(main);
        }
        main.innerHTML = `
      <div class="not-found">
            <div class="not-found__text-container">
                <p class="not-found__404">404</p>
                <p class="not-found__text">Page does not exist</p>
            </div>
            <img class="not-found__image" src="https://media.istockphoto.com/id/531023145/photo/shattered-guitar.jpg?b=1&s=170667a&w=0&k=20&c=dQaWp6qA6mZqCDdAjrDUPJ6ISrAbGJ4rPMLn8DnRljE=" alt="broken-guitar" >
      </div>
    `;
    };
}
