import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/jquery/dist/jquery.min'

const myElement = document.getElementById("root");
const rootElement = ReactDOM.createRoot(myElement)
rootElement.render(<App />);
