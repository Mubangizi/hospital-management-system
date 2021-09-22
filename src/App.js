import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import LoginPage from "./pages/AuthPages/LoginPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/doctors" component={DoctorsPage} />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile_info" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
