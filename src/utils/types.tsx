export interface Types {
  id?: number;
  name?: string;
  devices: Array<Device>;
}

export interface Device {
  id: number;
  img: string;
  title: string;
  price: number;
  initialPrice?: number;
  rate: number;
}

export interface Props {
  props: Device;
  quantity?: number;
  key: number;
}


