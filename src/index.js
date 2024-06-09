import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorDot.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 800, fill: "forwards" }
  );

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});

// document.querySelectorAll("a, .social-icon").forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     cursorDot.classList.add("cursor-hidden");
//     cursorOutline.classList.add("cursor-hidden");
//   });
//   item.addEventListener("mouseleave", () => {
//     cursorDot.classList.remove("cursor-hidden");
//     cursorOutline.classList.remove("cursor-hidden");
//   });
// });

reportWebVitals();
