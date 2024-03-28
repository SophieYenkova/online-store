import { makeAutoObservable, toJS } from "mobx";
import { Types } from "../utils/types";

export default class DeviceStore {
  _types: Array<Types>;
  _orders: Array<Types>;
  _totalPrice;

  constructor() {
    this._types = [
      {
        id: 1,
        name: "Наушники",
        devices: [
          {
            id: 1,
            img: "assets/headphones.jpg",
            title: "Apple BYZ S852I",
            price: 2927,
            initialPrice: 3527,
            rate: 4.7,
          },
          {
            id: 2,
            img: "./assets/headphones2.jpg",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
          },
          {
            id: 3,
            img: "./assets/headphones3.jpg",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
          },
          {
            id: 4,
            img: "assets/headphones.jpg",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7,
          },
          {
            id: 5,
            img: "./assets/headphones2.jpg",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
          },
          {
            id: 6,
            img: "./assets/headphones3.jpg",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
          },
        ],
      },
      {
        id: 2,
        name: "Беспроводные наушники",
        devices: [
          {
            id: 1,
            img: "./assets/wireless-headphones.jpg",
            title: "Apple AirPods",
            price: 9527,
            rate: 4.7,
          },
          {
            id: 2,
            img: "./assets/wireless-headphones2.jpg",
            title: "GERLAX GH-04",
            price: 6527,
            rate: 4.7,
          },
          {
            id: 3,
            img: "./assets/wireless-headphones3.jpg",
            title: "BOROFONE BO4",
            price: 7527,
            rate: 4.7,
          },
        ],
      },
    ];

    this._orders = [];
    this._totalPrice = 0;

    makeAutoObservable(this);
  }

  setTypes(types: Array<Types>) {
    this._types = types;
  }

  setOrders(orders: Array<Types>) {
    this._orders = [...this._orders, orders];
  }

  removeOrder(orderId) {
    const currentOrder = this._orders.find((order) => order.id === orderId);
    currentOrder
      ? (this._totalPrice = this._totalPrice -= currentOrder.price)
      : this._totalPrice;
    this._orders = this._orders.filter((order) => order.id !== orderId);
  }

  setTotalPrice(price) {
    this._totalPrice = Math.floor((this._totalPrice += Number(price)));
  }

  get types() {
    return this._types;
  }

  get orders() {
    console.log(this._orders);
    return this._orders;
  }

  get totalPrice() {
    return this._totalPrice;
  }
}
