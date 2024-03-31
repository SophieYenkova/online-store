import { useContext } from "react";
import { Context } from "../main";
import BasketCard from "./basketCard";
import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Total from "./total";
import { Device, Types } from "../utils/types";

const SPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1110px) {
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 30vh;
`;

const SPageTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 13px;

  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;

const BasketCards = observer(() => {
  const { device } = useContext(Context);
  const ordersArray = toJS(device.orders) || [];
  return (
    <>
      {ordersArray.map(([orderId, quantity] : [number, number]) => {
        const order = device.types
          .flatMap((type: Types) => type.devices)
          .find((device: Device) => device.id === orderId);
        if (order) {
          return (
            <BasketCard key={order.id} props={order} quantity={quantity} />
          );
        } 
        return null;
      })}
    </>
  );
});

const BasketItems = () => {
  return (
    <>
      <SPageTitle>Корзина</SPageTitle>
      <SPageWrapper>
        <SCards>
          <BasketCards />
        </SCards>
        <Total />
      </SPageWrapper>
    </>
  );
};

export default BasketItems;
