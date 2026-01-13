import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ButtonDocs from "./pages/button-docs";
import InputDocs from "./pages/input-docs";
import BadgeDocs from "./pages/badge-docs";
import SwitchDocs from "./pages/switch-docs";
import CheckboxDocs from "./pages/checkbox-docs";
import RadioDocs from "./pages/radio-docs";
import SeparatorDocs from "./pages/separator-docs";
import TypographyDocs from "./pages/typography-docs";
import ColorsDocs from "./pages/colors-docs";
import TokensDocs from "./pages/tokens-docs";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ButtonDocs />} />
          <Route path="/input" element={<InputDocs />} />
          <Route path="/badge" element={<BadgeDocs />} />
          <Route path="/switch" element={<SwitchDocs />} />
          <Route path="/checkbox" element={<CheckboxDocs />} />
          <Route path="/radio" element={<RadioDocs />} />
          <Route path="/separator" element={<SeparatorDocs />} />
          <Route path="/typography" element={<TypographyDocs />} />
          <Route path="/colors" element={<ColorsDocs />} />
          <Route path="/tokens" element={<TokensDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
