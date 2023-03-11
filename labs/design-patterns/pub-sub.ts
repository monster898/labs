class Foo {
  private topicSubscribers = {}
  public subscribe(topic, callback) {
    if (!this.topicSubscribers[topic]) {
      this.topicSubscribers[topic] = [callback];
    } else {
      this.topicSubscribers[topic].push(callback);
    }
  }

  public notify(topic, params) {
    const subscribers = this.topicSubscribers[topic];
    if (!subscribers) {
      return;
    }
    for (let i = 0; i < subscribers.length; i++) {
      try {
        subscribers[i] && subscribers[i](params);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default Foo;