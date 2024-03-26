import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserStore from "./store/UserStore.ts";
import DeviceStore from "./store/DeviceStore.ts";
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    line-height: 20px;
  }

  body{
    background-color: hsla(0, 0%, 92%, 1);
  }
`

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider
      value={{ user: new UserStore(), device: new DeviceStore() }}
    >
      <Global/>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
