import { render } from "preact";
import "./globals.css";
import { App } from "./components/App";
import Footer from "./components/Footer";

render(
  <>
    <App />
    <Footer />
  </>,
  document.getElementById("app")!
);
