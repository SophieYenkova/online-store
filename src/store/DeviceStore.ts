import { makeAutoObservable } from "mobx";

interface Types {
  id: number;
  name: string;
}

interface Devices {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

export default class DeviceStore {
  _types: Array<Types>;
  _devices: Array<Devices>;
  _wirelessDevices: Array<Devices>;

  constructor() {
    this._types = [
      { id: 1, name: "Наушники" },
      { id: 2, name: "Беспроводные наушники" },
    ];

    this._devices = [
      {
        id: 1,
        img: "./assets/headphones.jpg",
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
    ];

    this._wirelessDevices = [
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
    ];

    makeAutoObservable(this);
  }

  setTypes(types: Array<Types>) {
    this._types = types;
  }

  setDevices(devices: Array<Devices>) {
    this._devices = devices;
  }

  setWirelessDevices(wdevices: Array<Devices>) {
    this._wirelessDevices = wdevices;
  }

  get types() {
    return this._types;
  }

  get devices() {
    return this._devices;
  }

  get wirelessDevices() {
    return this._wirelessDevices;
  }
}
