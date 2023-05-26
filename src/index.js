import React from 'react';
import ReactDOM from 'react-dom';


import Gym from "./Gym";
import "./gym.css";

ReactDOM.render(
  <>
<h1>Weekend workout</h1>
      <h2>monday</h2>
      <h3>Chest & biceps</h3>
  <Gym/>
  <h2>tuesday</h2>
      <h3>Chest</h3>
  <Gym/>
  <h2>wednesday</h2>
      <h3>Chest</h3>
  <Gym/>
  <h2>thursday</h2>
      <h3>Chest</h3>
  <Gym/>
  <h2>friday</h2>
      <h3>Chest</h3>
  <Gym/>
  <h2>saturday</h2>
      <h3>Chest</h3>
  <Gym/>

  </>,
  document.getElementById("root")
);

