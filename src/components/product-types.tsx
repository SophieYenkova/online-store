import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Types } from "../utils/types";
import { toJS } from "mobx";
import Products from "./products";

const SUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 0;
  list-style-type: none;
`;

const SLi = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: hsla(0, 0%, 51%, 1);
`;

const ProductTypes = observer(() => {
  const { device } = useContext(Context);

  return (
    <SUl>
      {device.types.map((type: Types) => {
        return (
          <div className="" key={type.id}>
            <SLi>{type.name}</SLi>
            <SUl>
              <Products devices={toJS(type.devices)} />
            </SUl>
          </div>
        );
      })}
    </SUl>
  );
});

export default ProductTypes;
