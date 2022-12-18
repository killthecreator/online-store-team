import { routes, Route } from './routes.js';

export const locationHandler = async () => {
  let location: string = window.location.pathname;
  if (location.length == 0) {
      location = "/";
  }
  const route: Route | undefined = routes.find(r => r.path.match(/^location/) || r.path.match(/^\/404/));
  if (route === undefined) throw new Error(`There is no such location`);

  route.controller.setupPage(); //надо насписать метод с общим названием но разным содержанием для каждой страницы
};
