import './style.scss';
import { route } from './routing/routing.js';

const ancors: NodeList = document.querySelectorAll("a.routing");
ancors.forEach(ancor => ancor
  .addEventListener("click", (e) => {
    e.preventDefault();
    route(e);
  })
);
