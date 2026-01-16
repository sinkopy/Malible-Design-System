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
import LabelDocs from "./pages/label-docs";
import TextareaDocs from "./pages/textarea-docs";
import AlertDocs from "./pages/alert-docs";
import CardDocs from "./pages/card-docs";
import AvatarDocs from "./pages/avatar-docs";
import BreadcrumbDocs from "./pages/breadcrumb-docs";
import TabsDocs from "./pages/tabs-docs";
import FileInputDocs from "./pages/file-input-docs";
import TypographyDocs from "./pages/typography-docs";
import ColorsDocs from "./pages/colors-docs";
import TokensDocs from "./pages/tokens-docs";
import ShadowsDocs from "./pages/shadows-docs";
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
          <Route path="/label" element={<LabelDocs />} />
          <Route path="/textarea" element={<TextareaDocs />} />
          <Route path="/alert" element={<AlertDocs />} />
          <Route path="/card" element={<CardDocs />} />
          <Route path="/avatar" element={<AvatarDocs />} />
          <Route path="/breadcrumb" element={<BreadcrumbDocs />} />
          <Route path="/tabs" element={<TabsDocs />} />
          <Route path="/file-input" element={<FileInputDocs />} />
          <Route path="/typography" element={<TypographyDocs />} />
          <Route path="/colors" element={<ColorsDocs />} />
          <Route path="/tokens" element={<TokensDocs />} />
          <Route path="/shadows" element={<ShadowsDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
