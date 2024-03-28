import { useContext } from "react";
import { Context } from "../main";
import BasketCard from "./basketCard";
import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Total from "./total";

const SPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
`;



const BasketCards = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      {device.orders.map((order) => {
        return <BasketCard key={order.id} props={toJS(order)} />;
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
        <Total/>
      </SPageWrapper>
    </>
  );
};

export default BasketItems;
