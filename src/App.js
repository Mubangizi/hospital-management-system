import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/doctors" component={DoctorsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
