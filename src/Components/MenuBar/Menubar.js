import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import "./Menubar.css";


const Menubar = () => {
  const { user, handleLogout } = useFirebase();
  const hansignOut = () => {
    handleLogout()
  }
  return (
    <div className="navbarcss">
      <div className="menubar-container">
        <div className="menubar container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="logo-img">
                <img
                  className="p-2 w-100"
                  src="https://i.ibb.co/zR9mBzF/travel-tour-landscape-sun-airplane-600w-366089225.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-10 col-sm-12 my-5">
              <div className="menu-items text-center">
                <ul className="d-flex align-items-end justify-content-end me-5 nabvar-ul">
                  <li className="items p-2">
                    <Link className="items p-2" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/tour">
                      Tour
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/galary">
                      Galary
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/mybooking">
                      mybooking
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/about">
                      About
                    </Link>
                  </li>

                  <Link to="/contacts">
                    <button className="items btn  p-1 ">Contacts</button>
                  </Link>
                  <Link to="/admin">
                    <button className="items btn btn-danger p-1 ">Admin</button>
                  </Link>
                  {
                    !user.email && <Link to="/login">
                      <button className="items btn bg-warning p-1 ">Log In</button>
                    </Link>}:{user.email && <Link to="/">
                      <button onClick={hansignOut} className="items btn bg-warning p-1 ">Log Out</button>
                      <h5 className="d-inline ms-2">{user.displayName}</h5>
                    </Link>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;