import './style.css';
document.getElementById('app')!.innerHTML = 'Hello world';
import './style.scss';
import { route } from './routing/routing.js';

document.addEventListener('click', (e) => {
    const targetElement = e.target as HTMLAnchorElement;
    if (!targetElement.matches('a.routing')) {
        //links should contain class "routing" to be processed
        return;
    }
    e.preventDefault();
    route(e);
});

import { App, Model } from './components/app/app.js';
import { GlobalView } from './components/view/global';

const app = new App('/', new Model(), new GlobalView());

app.view.drawHeader();
app.view.drawFooter();
