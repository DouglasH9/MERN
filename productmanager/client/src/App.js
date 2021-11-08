import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Main from './Views/Main';
import ProductDetail from "./Views/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/api/products">
          <Main/>
        </Route>
        <Route path="/api/product/:id">
          <ProductDetail/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
