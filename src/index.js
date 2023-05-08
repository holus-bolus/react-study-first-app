import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const elem = <h2>Hello world</h2>;

// const elem = React.createElement(
//   "h2",
//   { className: "greetings" },
//   "Hello world"
// );
// const text = "Hello world";
//
// const elem = (
//   <div>
//     <h2 className="heading">{text}</h2>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// );//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
