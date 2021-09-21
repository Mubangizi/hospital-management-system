import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/doctors" component={DoctorsPage} />
        <Route exact path="/profile_info" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
