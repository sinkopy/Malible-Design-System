import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ButtonDocs from "./pages/button-docs";
import IconButtonDocs from "./pages/icon-button-docs";
import TooltipDocs from "./pages/tooltip-docs";
import SliderDocs from "./pages/slider-docs";
import ScrollAreaDocs from "./pages/scroll-area-docs";
import SelectDocs from "./pages/select-docs";
import PopoverDocs from "./pages/popover-docs";
import DropdownMenuDocs from "./pages/dropdown-menu-docs";
import DialogDocs from "./pages/dialog-docs";
import ToggleGroupDocs from "./pages/toggle-group-docs";
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
import GettingStarted from "./pages/getting-started";
import CompositionsDocs from "./pages/compositions-docs";
import SkeletonDocs from "./pages/skeleton-docs";
import SheetDocs from "./pages/sheet-docs";
import LayoutDocs from "./pages/layout-docs";
import FormFieldDocs from "./pages/form-field-docs";
import AutoCompleteDocs from "./pages/autocomplete-docs";
import DrawerDocs from "./pages/drawer-docs";
import ModalDocs from "./pages/modal-docs";
import Home from "./pages/home";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/compositions" element={<CompositionsDocs />} />
          <Route path="/button" element={<ButtonDocs />} />
          <Route path="/icon-button" element={<IconButtonDocs />} />
          <Route path="/tooltip" element={<TooltipDocs />} />
          <Route path="/slider" element={<SliderDocs />} />
          <Route path="/scroll-area" element={<ScrollAreaDocs />} />
          <Route path="/skeleton" element={<SkeletonDocs />} />
          <Route path="/sheet" element={<SheetDocs />} />
          <Route path="/select" element={<SelectDocs />} />
          <Route path="/popover" element={<PopoverDocs />} />
          <Route path="/dropdown-menu" element={<DropdownMenuDocs />} />
          <Route path="/dialog" element={<DialogDocs />} />
          <Route path="/toggle-group" element={<ToggleGroupDocs />} />
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
          <Route path="/form-field" element={<FormFieldDocs />} />
          <Route path="/typography" element={<TypographyDocs />} />
          <Route path="/layout" element={<LayoutDocs />} />
          <Route path="/colors" element={<ColorsDocs />} />
          <Route path="/autocomplete" element={<AutoCompleteDocs />} />
          <Route path="/drawer" element={<DrawerDocs />} />
          <Route path="/modal" element={<ModalDocs />} />
          <Route path="/tokens" element={<TokensDocs />} />
          <Route path="/shadows" element={<ShadowsDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
