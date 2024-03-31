import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../main";
import styled from "styled-components";

const SLink = styled.a`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  color: hsla(0, 0%, 100%, 1);
`;

const STransferButton = styled.div`
  position: absolute;
  bottom: -5px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 65px;
  border-radius: 20px;
  background-color: hsla(0, 0%, 6%, 1);
  cursor: pointer;

  &:hover {
    background-color: hsla(37, 100%, 75%, 1);
  }

  &:active {
    background-color: hsla(240, 16%, 13%, 1);
  }

  &:focus {
    outline: none;
    background-color: hsla(240, 16%, 13%, 0.5);
  }


  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }

`;

const STotal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 349px;
  height: 120px;
  padding: 21px;
  background-color: hsla(0, 0%, 100%, 1);
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 30px;

  @media (max-width: 1110px) {
    position: sticky;
    bottom: 30vh;
  }

  @media (max-width: 768px) {
    bottom: 5vh;
    left: 5%;
    width: 90%;
    margin-bottom: 5%;
  }
`;

const STotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 3/4;
  grid-row: 2/3;
  & > span {
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
  }
`;

const Total = observer(() => {
  const { device } = useContext(Context);
  return (
    <STotal>
      <STotalPrice>
        <span>Итого</span>
        <span>₽{device.totalPrice}</span>
      </STotalPrice>
      <STransferButton>
        <SLink href="https://www.google.ru/">Перейти к оформлению</SLink>
      </STransferButton>
    </STotal>
  );
});

export default Total;
