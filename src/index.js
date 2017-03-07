import React from "react";
import ReactDOM from "react-dom"; // tells Javascript that we want the ReactDOM library from the react-dom NPM module
import App from "./App"; // tells Javascript we want to import the App component from a local file called App.js
import "./index.css";

ReactDOM.render( <App />, document.getElementById("root") );
