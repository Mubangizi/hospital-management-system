import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
