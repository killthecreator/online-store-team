import { routes, Route } from './routes.js';

export const selectorChecker = (source: Element | Document, selector: string): Element => {
  const element = source.querySelector(selector);
  if (!element) throw new Error(`There is no element with selector ${selector}`);
  return element;
};

export const locationHandler = async () => {
  let location: string = window.location.pathname;
  if (location.length == 0) {
      location = "/";
  }
  const route: Route | undefined = routes.find(r => r.path.match(/^location/) || r.path.match(/^\/404/));
  if (route === undefined) throw new Error(`There is no such location`);
  const html = await fetch(route.template).then((response) => response.text());
  selectorChecker(document, "content").innerHTML = html;
  document.title = route.title;
  selectorChecker(document, 'meta[name="description"]')
      .setAttribute("content", route.description as string);
};
