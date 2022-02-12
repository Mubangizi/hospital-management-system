import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./AuthPages.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <form action="" className="FormSection">
        <h1>HMS - Login</h1>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Link to="/dashboard">
          <Button className="AddBtn">Login</Button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
