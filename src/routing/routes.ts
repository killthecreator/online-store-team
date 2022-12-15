export type Route = {
  path: string,
  template: string,
  title: string,
  description: string,
}

export const routes: Route[] = [
  {
    path: "/404",
    template: "/templates/404.html",
    title: "404",
    description: "Page not found",
  },
  {
    path: "/",
    template: "/templates/ind.html",
    title: "Main",
    description: "Main Page",
    /*component: HomeComponent,
  надо не надо???????
  это куски кода их по идее надо импортировать из файлов компонетнов, которые надо будет создать
  например есть какая-то функция которая возвращает строку ` ... `, а внутри строки готовый кусок кода текстом
  например
  return `
      <div class="calss1">
        <p>часть содержимого какой-то страницы </p>
      </div>`;
  либо можно использовать templates
  какой способ лучше?
*/},
  { path: "/page1",
    template: "/templates/page1.html",
    title: "Page 1",
    description: "Page 1",
  },
  { path: "/page2",
    template: "/templates/page2.html",
    title: "Page 2",
    description: "Page 2",
  },
]
