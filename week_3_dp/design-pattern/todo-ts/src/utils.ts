export function findParentNode(target: HTMLElement, id: number): HTMLElement {
  while ((target = target.parentNode as HTMLElement)) {
    const itemId = parseInt(target.dataset.id);
    if (itemId === id) {
      return target;
    }
  }
}

export function createItem(
  tagName: string,
  className: string,
  todoItem: string
): HTMLElement {
  const oItem: HTMLElement = document.createElement(tagName);
  oItem.className = className;
  oItem.innerHTML = todoItem;
  return oItem;
}
