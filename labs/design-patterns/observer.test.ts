import { ConcreteObserver, ConcreteSubject } from "./observer";

describe("test observer design parrent", () => {
  test("one on one should work", () => {
    const subject = new ConcreteSubject();
    const observer = new ConcreteObserver();

    subject.attach(observer);
    subject.someBusinessLogic();
    expect(subject.state).toBe(1);
  })

  test("one to many should also work", () => {
    const subject = new ConcreteSubject();
    const NUMBER_OF_OBSERVERS = 10;
    for (let i = 0; i < NUMBER_OF_OBSERVERS; i++) {
      subject.attach(new ConcreteObserver());
    }
    
    subject.someBusinessLogic();
    expect(subject.state).toBe(NUMBER_OF_OBSERVERS)
  })
})