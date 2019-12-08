export class Store {

  private subscribers: Function[];
  private reducers: { [key: string]: Function }
  private state: { [key: string]: any }

  constructor(reducers = {}, intitialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(intitialState, {});
  }

  //store.value
  get value() {
    return this.state;
  }

  subscribe(fn) {

    this.subscribers = [...this.subscribers, fn];
    this.notify();
    console.log("fn in ", fn);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();

  }

  private notify() {
    this.subscribers.forEach(fn => {
      fn(this.value)
    })

  }

  private reduce(state, action) {
    console.log('reduce')
    const newstate = {};

    for (const prop in this.reducers) {
      newstate[prop] = this.reducers[prop](state[prop], action);
    }
    return newstate;
  }


}

