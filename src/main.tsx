import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
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
    height: 100%;
  }
`
export interface Context {
  device: DeviceStore;
}

export const Context = createContext<Context>({device: new DeviceStore()});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider
      value={{device: new DeviceStore()}}
    >
      <Global/>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
