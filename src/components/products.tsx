import Card from "./card";
import { toJS } from "mobx";

const Products = (devices) => {
    return (
      <ul>
        {devices.map((device) => {
          return <Card key={device.id} props={toJS(device)}></Card>;
        })}
      </ul>
    );
  };
  
export default Products;
