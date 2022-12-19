import { route } from './routing/routing.js';

const ancors: NodeList = document.querySelectorAll("a.routing");
ancors.forEach(ancor => ancor
  .addEventListener("click", (e) => {
    e.preventDefault();
    route(e);
  })
);

import { App, Model } from './components/app/app.js';
import { GlobalView } from './components/view/';

const app = new App('/', new Model(), new GlobalView());

app.view.drawHeader();
app.view.drawMain();
app.view.drawFooter();
