import React from "react";
import { Switch, Route } from "react-router-dom";
import LaunchPrograms from "./SpacexLaunch";
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={LaunchPrograms}/>
    </Switch> 
  );
};

export default App;
