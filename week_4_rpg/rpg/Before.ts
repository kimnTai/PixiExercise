interface IBooK {}

class PersonA {
  private book: IBooK;
  constructor(book: IBooK) {
    this.book = book;
  }
}
class BookA implements IBooK {}

const bookA = new Book();
const manA = new PersonA(bookA);
