interface IBooK {}

class PersonB {
  private book: Book;
  constructor(book: IBooK) {
    this.book = book;
  }
}

class BookB implements IBooK {}

class ContainerB {
  static getBook() {
    return new Book();
  }
  constructor() {}
}

const manB = new PersonB(ContainerB.getBook());
