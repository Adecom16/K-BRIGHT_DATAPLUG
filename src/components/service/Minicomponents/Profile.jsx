
import React, { useState, useEffect } from "react";
import "./all.css";
import Stat from "./Stat.jsx";

const Profile = ()=> {
 const { user, loading } = useState({});

//  const handleFormSubmit = (e) => {
//    e.preventDefault();
//    // Your logic for handling the form submit goes here
//  };

//  useEffect(() => {
//    if (!user && !loading) {
//      window.location.replace("/login");
//    }
//  }, [user, loading]);

 if (loading) {
   return <div>Loading...</div>;
 }

  return (
    <div className="profile-container">

<div className="col-md-10">
          <div className="profile-header d-flex align-items-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              width={80}
              className="mr-3"
            />
            <h3>Profile</h3>
          </div>

          <div className="profile-card mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="profile-info">
                  <div className="mb-3">
                    <span className="fw-bold">Username:</span>{" "}
                    {user ? (
                      <>{user.username}</>
                    ) : (
                      <div className="text-gray-800">Not logged in.</div>
                    )}
                  </div>
                  <hr />
                  <div className="mb-3">
                    <span className="fw-bold">Name:</span>
                    {user ? (
                      <>{user.name}</>
                    ) : (
                      <div className="text-gray-800">Not logged in.</div>
                    )}
                  </div>
                  <hr />
                  <div className="mb-3">
                    <span className="fw-bold">Phone No:</span>
                    {user ? (
                      <>{user.phoneNo}</>
                    ) : (
                      <div className="text-gray-800">Not logged in.</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-info">
                  <div className="mb-3">
                    <span className="fw-bold">Gender:</span>
                    {user ? (
                      <>{user.gender}</>
                    ) : (
                      <div className="text-gray-800">Not logged in.</div>
                    )}
                  </div>
                  <hr />
                  <div className="mb-3">
                    <span className="fw-bold">NIN:</span>
                    {user ? (
                      <>{user.nin}</>
                    ) : (
                      <div className="text-gray-800">Not logged in.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card mt-4">
            <h5>Transactions History</h5>
            <hr />
            <Stat />
          </div>
        </div>
    </div>
  );
}

export default Profile;
