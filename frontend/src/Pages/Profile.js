import React from "react";

import "../Styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="list-container">
        <div className="list-header">
          <h2>Student List</h2>
        </div>
        <div className="list-card">
            hello
        </div>
      </div>
      <div className="input-container">
        <div className="add-header">
          <h2>Add New Profile</h2>
        </div>
        <div className="inputs">
          <label>Student Name</label>
          <br />
          <input type="text" placeholder="Enter Name..." />
        </div>
      </div>
    </div>
  );
};

export default Profile;
