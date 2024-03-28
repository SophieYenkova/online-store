import ProductTypes from "../components/product-types";
import styled from "styled-components";

const SWrapper = styled.div`
  margin-bottom: 30vh;
`;

const Shop = () => {
  return (
    <SWrapper>
      <ProductTypes />
    </SWrapper>
  );
};

export default Shop;
