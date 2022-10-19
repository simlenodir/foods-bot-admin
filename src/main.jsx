import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./users.jsx";
import { FoodsProvider } from "./context/foodsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FoodsProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/foods" element={<App />} />
      </Routes>
      </FoodsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
