import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/RecPages/ProfilePage";
import DashboardPage from "./pages/RecPages/DashboardPage";
import DoctorsPage from "./pages/RecPages/DoctorsPage";
import LoginPage from "./pages/RecPages/AuthPages/LoginPage";
import NotFoundPage from "./pages/RecPages/NotFoundPage.jsx/index.jsx";
import HomePage from "./pages/HomePage";
import HospitalsPage from "./pages/HospitalsPage";
import SingleHospitalPage from "./pages/HospitalsPage/SingleHospitalPage";
import DiseasePage from "./pages/DiseasePages";
import SingleDiseasePage from "./pages/DiseasePages/SingleDiseasePage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hospitals" component={HospitalsPage} />
        <Route exact path="/hospitals/:id" component={SingleHospitalPage} />
        <Route exact path="/diseases" component={DiseasePage} />
        <Route exact path="/disease/:id" component={SingleDiseasePage} />
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
