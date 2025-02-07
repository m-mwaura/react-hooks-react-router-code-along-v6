import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import routes from "./routes";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);