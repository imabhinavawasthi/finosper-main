import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
import { db, auth } from '../../firebasecong/Firebasecong';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUserPlus, faUser, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router';
import "./navbar.css";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
// import { useNavigate } from "react-router";
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const curruser = props.userdata;
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const SignOutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("./");
      })
      .catch((error) => {
        console.log(error.message);
      });
    // setInfoMess("Logged Out Successfully!");
    setTimeout(() => {
      // setInfoMess("");
    }, 4000);
  };
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}
          <NavLink to="/"><h1 className="logocss">
            <strong>
              Finos<span className="logored">per</span>
            </strong>
          </h1></NavLink>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <NavLink className="nav-link-css" to="/">Salaried</NavLink>
          </p>
          <p>
            <NavLink className="nav-link-css" to="/services">Business</NavLink>
          </p>
          <p>
            <NavLink className="nav-link-css" to="/library">Charity</NavLink>
          </p>
          <p>
            <NavLink className="nav-link-css" to="/aboutus">About Us</NavLink>
          </p>
          <p>
            <NavLink className="nav-link-css" to="/contact">Contact us</NavLink>
          </p>
        </div>
      </div>
      {curruser ? (
        <div className="gpt3__navbar-sign">
          <p>
            <span className="user-profile"><NavLink to="/profile">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </NavLink></span>
            <NavLink to="" onClick={SignOutUser}>
              Sign Out <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
            </NavLink>

            {/* <NavLink to="/profile" ><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon></NavLink> */}
          </p>
        </div>
      ) : (
        <div className="gpt3__navbar-sign">
          <p>
            <NavLink to="/login">Log in <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon></NavLink>
          </p>
          <NavLink to="/signup">
            <button type="button">Sign up <FontAwesomeIcon icon={faUserPlus} ></FontAwesomeIcon></button>
          </NavLink>
        </div>
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <p>
                <NavLink to="/services">Services</NavLink>
              </p>
              <p>
                <NavLink to="/library">Library</NavLink>
              </p>
              <p>
                <NavLink to="/aboutus">About Us</NavLink>
              </p>
              <p>
                <NavLink to="/contact">Contact</NavLink>
              </p>
            </div>
            {curruser ? (
              <>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>
                    <span className="user-profile"><NavLink to="/profile">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </NavLink></span>
                    <NavLink to="" onClick={SignOutUser}>
                      Sign Out <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
                    </NavLink>
                  </p>
                </div>
              </>
            ) : (
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>
                  <NavLink to="login">Log in <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon></NavLink>
                </p>
                <NavLink to="/signup">
                  <button type="button">Sign up <FontAwesomeIcon icon={faUserPlus} ></FontAwesomeIcon></button>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
