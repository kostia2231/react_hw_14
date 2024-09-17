import React from "react";
import { connect } from "react-redux";

function User({ name, status }) {
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
}

const mapDispatchToProps = (state) => ({
  name: state.name,
  status: state.status,
}); 

export default connect(mapDispatchToProps)(User);
