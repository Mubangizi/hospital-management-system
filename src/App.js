import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/RecPages/ProfilePage";
import DashboardPage from "./pages/RecPages/DashboardPage";
import DoctorsPage from "./pages/RecPages/DoctorsPage";
import LoginPage from "./pages/RecPages/AuthPages/LoginPage";
import NotFoundPage from "./pages/RecPages/NotFoundPage.jsx/index.jsx";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Records management routes */}
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/doctors" component={DoctorsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile_info" component={ProfilePage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
