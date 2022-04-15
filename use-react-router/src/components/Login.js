import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  console.log(urlParams + "");
  return (
    <div className="w-full max-w-md mx-auto">
      <h1>Login</h1>
      <hr />
      <div>Name: {urlParams.get("name")}</div>
      <div>Password: {urlParams.get("password")}</div>
    </div>
  );
};

export default Login;
