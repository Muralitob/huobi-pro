import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import configs from "./config";
function MainRoute() {
  return (
    <Router>
      {configs.map((item) => (
        <Route path={item.path} render={props => <item.component {...props} />}  />
      ))}
    </Router>
  );
}

export default MainRoute;
