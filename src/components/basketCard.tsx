import styled from "styled-components";
import { Props } from "../utils/types";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const SLi = styled.li`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: auto auto;
  justify-items: end;
  row-gap: 20px;
  padding: 18px 28px 15px 18px;
  width: 633px;
  height: 218px;
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.1);
`;

const SImg = styled.img`
  align-self: center;
  justify-self: center;
  object-fit: contain;
  grid-column: 1/2;
  grid-row: 1/2;
  width: 147px;
  height: 136px;
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: start;
  row-gap: 12px;
  grid-column: 2/3;
  grid-row: 1/2;
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
  font-weight: 600;
  color: hsla(0, 0%, 67%, 1);
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

const SCounter = styled.div`
  display: flex;
  column-gap: 25px;
  align-items: center;
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: center;

  & > button {
    color: hsla(37, 100%, 75%, 1);
    background: none;
    border: none;
  }
`;

const SInc = styled.button`
  &:hover {
    color: rgba(218, 136, 3, 0.856);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
  }
`;

const SDec = styled.button`
  &:hover {
    color: rgba(218, 136, 3, 0.856);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
  }
`;

const SNum = styled.span`
  font-weight: 600;
`;

const SDelete = styled.button`
  grid-column: 3/4;
  grid-row: 1/2;
  color: hsla(0, 66%, 63%, 1);
  background: none;
  border: none;
  width: 20px;
  height: 17px;
  &:hover {
    color: hsla(240, 16%, 13%, 1);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
  }
`;

const SItemPrice = styled.span`
  grid-column: 3/4;
  grid-row: 2/3;
  font-weight: 600;
`;

const BasketCard = observer(({ props }: Props) => {
  const { device } = useContext(Context);
  const { id, img, title, price, initialPrice } = props;
  return (
    <>
      <SLi key={id}>
        <SImg src={img}></SImg>
        <SWrapper>
          <STitle href="#">{title}</STitle>
          <SPrice>
            {price} ₽{" "}
            {initialPrice && <SInitialPrice>{initialPrice} ₽</SInitialPrice>}
          </SPrice>
        </SWrapper>
        <SCounter>
          <SDec type="button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="currentColor" />
              <path d="M8 14H22V16H8V14Z" fill="white" />
            </svg>
          </SDec>
          <SNum>1</SNum>
          <SInc type="button">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.2056" cy="15" r="15" fill="currentColor" />
              <path
                d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z"
                fill="white"
              />
            </svg>
          </SInc>
        </SCounter>
        <SItemPrice>{price} ₽</SItemPrice>
        <SDelete type="button" onClick={() => {device.removeOrder(id)}}>
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z"
              fill="currentColor"
            />
          </svg>
        </SDelete>
      </SLi>
    </>
  );
});

export default BasketCard;
