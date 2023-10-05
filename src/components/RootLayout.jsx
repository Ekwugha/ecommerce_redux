import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/Store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
