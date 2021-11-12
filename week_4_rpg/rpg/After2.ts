interface IBooK {}

function Inject(target: any, key: string): any {
  target[key] = new Book();
}
class Book implements IBooK {}

class Person {
  @Inject
  private book: Book;
  constructor() {}
}

const man = new Person();
