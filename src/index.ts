import './style.scss';
import { route } from './routing/routing.js';

document.getElementById('app')!.innerHTML = 'Hello world';

document.addEventListener("click", (e) => {
  const targetElement = e.target as HTMLAnchorElement;
  if (!targetElement.matches("a.routing")) {  //links should contain class "routing" to be processed
      return;
  }
  e.preventDefault();
  route(e);
});
