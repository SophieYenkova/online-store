import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserStore from "./store/UserStore.ts";
import DeviceStore from "./store/DeviceStore.ts";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider
      value={{ user: new UserStore(), device: new DeviceStore() }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
