import { makeAutoObservable } from "mobx";
import { Types } from "../utils/types";

export default class DeviceStore {
  _types: Array<Types>;

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
            id: 1,
            img: "assets/headphones.jpg",
            title: "Apple BYZ S852I",
            price: 2927,
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

    makeAutoObservable(this);
  }

  setTypes(types: Array<Types>) {
    this._types = types;
  }

  get types() {
    return this._types;
  }
}
