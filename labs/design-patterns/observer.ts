interface Subject {
  attach(observer: Observer): void
  detach(observer: Observer): void
  notify(): void
}

class ConcreteSubject implements Subject {
  public state: number

  private observers: Observer[] = []

  public attach(observer: Observer): void {
    if (this.observers.indexOf(observer) >= 0) {
      throw new Error("observer exist already")
    }
    this.observers.push(observer)
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      throw new Error("observer not exist in observers")
    }
    this.observers.splice(observerIndex, 1)
  }

  public notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }

  public someBusinessLogic() {
    this.state = 0;
    this.notify()
  }
}

interface Observer {
  update(subject: Subject): void
}

class ConcreteObserver implements Observer {
  public update(subject: ConcreteSubject) {
    if (subject instanceof ConcreteSubject) {
      // do something
      subject.state += 1;
    }
  }
}

export {
  ConcreteObserver,
  ConcreteSubject
}
