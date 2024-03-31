import { makeAutoObservable } from "mobx";
import { Types } from "../utils/types";

export default class DeviceStore {
  _types: Array<Types>;
  _orders: [number, number][];
  _totalPrice: number;
  _map: Map<number, number>;
  _ordersQuantity: number | undefined;

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
            id: 11,
            img: "./assets/wireless-headphones.jpg",
            title: "Apple AirPods",
            price: 9527,
            rate: 4.7,
          },
          {
            id: 22,
            img: "./assets/wireless-headphones2.jpg",
            title: "GERLAX GH-04",
            price: 6527,
            rate: 4.7,
          },
          {
            id: 33,
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
    this._map = new Map();

    makeAutoObservable(this);
    this.loadCartFromSessionStorage();

    const savedMap = sessionStorage.getItem("map");
    if (savedMap) {
      this._map = new Map(JSON.parse(savedMap));
    } else {
      this._map = new Map();
    }

    const savedCartItems = sessionStorage.getItem("cartItems");
    if (savedCartItems) {
      this._orders = JSON.parse(savedCartItems);
    }

    const savedCartQuantity = sessionStorage.getItem("itemsCount");
    if (savedCartQuantity) {
      this._ordersQuantity = JSON.parse(savedCartQuantity);
    }

    this.calcTotalPrice();
  }

  saveMapToSessionStorage() {
    sessionStorage.setItem("map", JSON.stringify([...this._map]));
  }

  saveCartToSessionStorage() {
    sessionStorage.setItem("cartItems", JSON.stringify(this._orders));
  }

  saveQuantityToSessionStorage() {
    sessionStorage.setItem("itemsCount", JSON.stringify(this._ordersQuantity));
  }

  saveTotalPriceToSessionStorage() {
    sessionStorage.setItem("totalPrice", JSON.stringify(this._totalPrice));
  }

  calcOrdersQuantity() {
    this._ordersQuantity = Array.from(this._map.values()).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }

  calcTotalPrice() {
    this._totalPrice = 0;
    this._orders.forEach(([orderId, quantity]) => {
      const order = this._types
        .flatMap((type) => type.devices)
        .find((device) => device.id === orderId);

      if (order) {
        this._totalPrice += order.price * quantity;
      }
    });
    this.saveTotalPriceToSessionStorage();
  }

  loadCartFromSessionStorage() {
    const savedCartItems = sessionStorage.getItem("cartItems");
    if (savedCartItems) {
      this._orders = JSON.parse(savedCartItems);
    }
  }

  setTypes(types: Array<Types>) {
    this._types = types;
  }

  refreshCalcs() {
    this.calcOrdersQuantity();
    this.calcTotalPrice();
  }

  refreshSessionStorage() {
    this.saveCartToSessionStorage();
    this.saveQuantityToSessionStorage();
    this.saveMapToSessionStorage();
  }

  setOrder(orderId: number) {
    if (!this._map.has(orderId)) {
      this._map.set(orderId, 1);
    } else {
      this._map.set(orderId, (this._map.get(orderId) || 0) + 1);
    }
    this._orders = [...this._map.entries()];
    this.refreshCalcs();
    this.refreshSessionStorage();
  }

  removeOrder(orderId: number) {
    if (this._map.has(orderId)) {
      this._map.delete(orderId);
      this._orders = [...this._map.entries()];
      this.refreshCalcs();
      this.refreshSessionStorage();
    }
  }

  decreaseOrder(orderId: number) {
    if (this._map.has(orderId)) {
      this._map.set(orderId, (this._map.get(orderId) || 0) - 1);
      if ((this._map.get(orderId) || 0) < 1) {
        this._map.delete(orderId);
      }

      this._orders = [...this._map.entries()];
      this.refreshCalcs();
      this.refreshSessionStorage();
    }
  }

  get types() {
    return this._types;
  }

  get orders() {
    return this._orders;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  get ordersQuantity() {
    return this._ordersQuantity;
  }
}
