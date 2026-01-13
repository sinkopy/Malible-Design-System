import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ButtonDocs from "./pages/button-docs";
import InputDocs from "./pages/input-docs";
import ControlsDocs from "./pages/controls-docs";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ButtonDocs />} />
          <Route path="/input" element={<InputDocs />} />
          <Route path="/controls" element={<ControlsDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
