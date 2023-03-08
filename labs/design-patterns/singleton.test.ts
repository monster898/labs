import {Singleton, SingletonInES5} from "./singleton";

describe("test singleton patterns in typescript", () => {
  test("instance should always share first one", () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    expect(instance1).toBe(instance2);
    expect(typeof instance1.timestampInit).toBe("number")
  })
})

describe("test singleton patterns in javascript", () => {
  test("instance should always share first one", () => {
    const instance1 = SingletonInES5.getInstance();
    const instance2 = SingletonInES5.getInstance();

    expect(instance1).toBe(instance2);
    expect(typeof instance1.timestampInit).toBe("number")
  })

  test("private method shouldn't be reachable", () => {
    const instance1 = SingletonInES5.getInstance();
    expect(instance1.privateMethod).toBeUndefined();
  })
})