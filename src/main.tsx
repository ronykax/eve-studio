import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./app.tsx";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("no root");
}

createRoot(root).render(<App />);
