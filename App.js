import React from "react";
import { createRoot } from "react-dom/client";

const node1 = React.createElement(
  "div",
  { id: "parent-1" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag parent 1!"),
    React.createElement("h3", {}, "I am h3 Tag parent 1!"),
  ])
);

const node2 = React.createElement(
  "div",
  { id: "parent-2" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag parent 2!"),
    React.createElement("p", {}, "I am p Tag parent 2!"),
  ])
);

const el = React.createElement("div", {}, [node1, node2]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Malya from React!"
);

const root = createRoot(document.getElementById("root"));

// setTimeout(() => root.render(el), 5000);

root.render(el);

// "main": "App.js",
// this is a way to tell that this is the entry
// point of our app but when parser is used it will conflict with this.
// NPM will automatically generate this for us.
