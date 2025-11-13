import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "flag-icon-css/css/flag-icons.min.css"
import "./i18n.js"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="Carregando...">
      <App />
    </Suspense>
  </StrictMode>
);
