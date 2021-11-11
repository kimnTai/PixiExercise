interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  public state!: number;
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("主題：已經附加了觀察者。");
    }
    console.log("對象：附加一名觀察員。");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("主題：不存在的觀察者。");
    }

    this.observers.splice(observerIndex, 1);
    console.log("對象：分離了一個觀察者。");
  }

  public notify(): void {
    console.log("主題：通知觀察者...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("\n對象：我正在做一些重要的事情。");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`主題：我的狀態剛剛更改為：${this.state}`);
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("具體的觀察者Ａ: 對事件做出反應。");
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("具體的觀察者 B: 對事件做出反應。");
    }
  }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
