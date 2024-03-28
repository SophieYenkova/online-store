import { Device, Types } from "../utils/types";
import Card from "./card";
import { toJS } from "mobx";

const Products = ({ devices }: Types ) => {
  return (
    <>
      {devices.map((device: Device) => {
        return <Card key={device.id} props={toJS(device)}></Card>;
      })}
    </>
  );
};

export default Products;
