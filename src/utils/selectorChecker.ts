export const selectorChecker = (source: Element | Document, selector: string): Element => {
  const element = source.querySelector(selector);
  if (!element) throw new Error(`There is no element with selector ${selector}`);
  return element;
};
