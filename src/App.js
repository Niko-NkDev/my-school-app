import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/shareds/Menu";
import Home from "./components/Home/Home";
import Footer from "./components/shareds/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
