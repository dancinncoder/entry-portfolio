import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Story from "../pages/Story";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/story"} element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
