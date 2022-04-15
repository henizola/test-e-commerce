import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/context";

import HomePage from "./Home/Home.component";

import React from "react";
import Checkout from "./Components/Checkouot/checkout.component";
import Summary from "./Components/Summary/summary.component";

function App() {
  console.log(window.location.pathname);

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
