import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfoAction } from "../../redux/actions";
import styles from "./UserForm.module.css";

const UserForm = ({ setUserInfoAction }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfoAction(name, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit User Information</h1>
      <div className={styles.input}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <label>Status: </label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Update User
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  setUserInfoAction,
};

export default connect(null, mapDispatchToProps)(UserForm);
