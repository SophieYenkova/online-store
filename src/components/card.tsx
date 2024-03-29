import styled from "styled-components";
import Star from "../assets/icons/rating-star.svg";
import { Props } from "../utils/types";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const SLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 350px;
  height: 407px;
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.1);
`;

const SImg = styled.img`
  width: 219px;
  height: 237px;
  align-self: center;
  margin-bottom: 55px;
`;

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 65px;
  grid-gap: 25px;
  padding: 5px;
`;

const STitle = styled.a`
  grid-column: 1/ 2;
  grid-row: 1/1;
  font-weight: 600;
  color: hsla(240, 16%, 13%, 1);
  text-decoration: none;

  &:hover {
    color: hsla(37, 100%, 75%, 1);
  }

  &:active {
    color: hsla(240, 16%, 13%, 1);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
    color: hsla(240, 16%, 13%, 0.5);
  }
`;

const SPrice = styled.span`
  position: relative;
  grid-column: 2/ 3;
  grid-row: 1/1;
  font-weight: 600;
  color: hsla(31, 100%, 63%, 1);
`;

const SInitialPrice = styled.span`
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 13px;
  line-height: 15px;
  text-decoration: line-through;
  color: hsla(37, 100%, 75%, 1);
`;

const SRate = styled.span`
  display: flex;
  column-gap: 10px;
  align-items: center;
  grid-column: 1/ 2;
  grid-row: 2/3;
  font-weight: 600;
  color: hsla(0, 0%, 51%, 1);
`;

const SBuy = styled.button`
  grid-column: 2/ 3;
  grid-row: 2/3;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: hsla(37, 100%, 75%, 1);
  }

  &:active {
    color: hsla(240, 16%, 13%, 1);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
  }
`;

const Card = observer(({ props }: Props) => {
  const { id, img, title, price, initialPrice, rate } = props;
  const { device } = useContext(Context);

  return (
    <SLi key={id}>
      <SImg src={img}></SImg>
      <SWrapper>
        <STitle href="#">{title}</STitle>
        <SPrice>
          {price} ₽{" "}
          {initialPrice && <SInitialPrice>{initialPrice} ₽</SInitialPrice>}
        </SPrice>
        <SRate>
          <img src={Star} />
          {rate}
        </SRate>
        <SBuy
          onClick={() => {
            // counter.increase();
            device.setOrder(id);
          }}
        >
          Купить
        </SBuy>
      </SWrapper>
    </SLi>
  );
});

export default Card;
