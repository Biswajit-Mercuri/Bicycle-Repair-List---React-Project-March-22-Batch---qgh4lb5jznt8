import React, {Component, useState} from "react";
import Form from "./Form";
import List from "./List";

import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <h1>Bicycle Repair App</h1>
      <Form />
      <List />
    </div>
  )
}


export default App;
