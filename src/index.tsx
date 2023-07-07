import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TimeTravelProvider } from "./context/time_travel_context";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TimeTravelProvider>
      <App />
    </TimeTravelProvider>
  </React.StrictMode>
);
