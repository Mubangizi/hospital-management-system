import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProfilePage from "./pages/RecPages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/RecPages/DoctorsPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage.jsx/index.jsx";
import HomePage from "./pages/HomePage";
import HospitalsPage from "./pages/HospitalsPage";
import SingleHospitalPage from "./pages/HospitalsPage/SingleHospitalPage";
import DiseasePage from "./pages/DiseasePages";
import SingleDiseasePage from "./pages/DiseasePages/SingleDiseasePage";
import PatientsPage from "./pages/PatientsPage";
// Protected route should have token. If not, login.
const hasToken = localStorage.getItem("token", null);

const ProtectedRoute = ({ ...props }) =>
  hasToken ? <Route {...props} /> : <Redirect to="/login" />;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hospitals" component={HospitalsPage} />
        <Route exact path="/hospitals/:id" component={SingleHospitalPage} />
        <Route exact path="/diseases" component={DiseasePage} />
        <Route exact path="/disease/:id" component={SingleDiseasePage} />
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
        <ProtectedRoute exact path="/patients" component={PatientsPage} />
        {/* Records management routes */}
        <Route exact path="/doctors" component={DoctorsPage} />
        <ProtectedRoute exact path="/profile_info" component={ProfilePage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
