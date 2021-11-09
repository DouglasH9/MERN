import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Main from './Views/Main';
import ProductDetail from "./Views/ProductDetail";
import UpdateProduct from "./Views/UpdateProduct";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/api/products">
          <Main/>
        </Route>
        <Route exact path="/api/product/:id">
          <ProductDetail/>
        </Route>
        <Route exact path="/api/product/:id/edit">
          <UpdateProduct/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
