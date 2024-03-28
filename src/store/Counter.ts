import { makeAutoObservable } from "mobx";

export default class CounterStore {
  itemsCount = 0;
  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.itemsCount += 1;
  }
  decrease() {
    this.itemsCount -= 1;
  }
}
