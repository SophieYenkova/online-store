import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import Header from "./components/header";
import styled from "styled-components";
import Footer from "./components/footer";
import ProductTypes from "./components/product-types";

const SWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <SWrapper>
        <Header />
        <ProductTypes/>
        <Footer/>
      </SWrapper>
    </BrowserRouter>
  );
};

export default App;
