export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Header";
    document.body.appendChild(elem);
  }
}
export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Content";
    document.body.appendChild(elem);
  }
}
export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Footer";
    document.body.appendChild(elem);
  }
}
