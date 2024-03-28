import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import Header from "./components/header";
import styled from "styled-components";
import Footer from "./components/footer";

const SWrapper = styled.div`
  max-width: 1110px;
  min-height: 100vh;
  margin: 0 auto;
`;

const App = () => {
  return (
    <BrowserRouter>
      <SWrapper>
        <Header />
        <Router />
        <Footer />
      </SWrapper>
    </BrowserRouter>
  );
};

export default App;
