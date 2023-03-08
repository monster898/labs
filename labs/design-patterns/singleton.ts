class Singleton {
  private static instance: Singleton;
  public timestampInit: number;

  private constructor() {
    this.timestampInit = Date.now()
  }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance
  }
}

const SingletonInES5 = (function() {
  let instance;
  
  function init() {

    const privateMethod= () => {}
    
    return { timestampInit: Date.now() }
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }
})()


export {Singleton, SingletonInES5};