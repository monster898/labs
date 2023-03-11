import Foo from "./pub-sub";

describe("test publish subscribe design pattern", () => {
  test("", () => {
    const instance = new Foo();
    const subscriber1 = jest.fn();
    const subscriber2 = jest.fn();

    instance.subscribe("topic1", subscriber1);
    instance.subscribe("topic2", subscriber2);

    instance.notify("topic1", "foo");
    expect(subscriber1).toBeCalledWith("foo");

    instance.notify("topic2", "bar");
    expect(subscriber2).toBeCalledWith("bar");
  })
})