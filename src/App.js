import "./App.css";
import React from "react";
import User from "./components/user";
import UserForm from "./components/userForm";

function App() {
  return (
    <div className="wrapper">
      <h1>User Profile</h1>
      <User />
      <UserForm />
    </div>
  );
}

export default App;
