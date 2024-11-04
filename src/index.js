import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

import Books from "./components/Books";
import About from "./components/About";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "2rem" }}>
                  <p>لطفا کتاب مورد نظر را انتخاب کنید</p>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
