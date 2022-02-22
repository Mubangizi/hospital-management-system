import { Button, TextField } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { API } from "../../utils";
import "./AuthPages.css";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();

  const loginUser = async () => {
    await API.post(`/users/login`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.data.access_token);
        localStorage.setItem("username", res.data.data.username);
        localStorage.setItem("hospital_id", 1);
        dispatch({
          type: actionTypes.LOGIN_USER,
          user: res.data.data,
        });
        window.location.href = "/dashboard";
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
        setError("Invalid email or password");
      });
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="LoginPage">
      <form action="" onSubmit={handleOnSubmit} className="FormSection">
        <h1>HMS - Login</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          value={email}
          variant="outlined"
          onChange={handleOnChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handleOnChange}
          required
        />
        {error && <div className="Error">{error}</div>}
        <Button type="submit" className="AddBtn">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
