import React, { useState, useEffect } from "react";
//hellos
//okayss
//abhinav 
//preetu
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers"; 
import { CTA, Brand, Navbar, Home } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from "./firebasecong/Firebasecong";
import { collection, getDocs, query, where } from "firebase/firestore";
import Courses from "./Pages/CoursesPage/Courses";
import About from "./Pages/AboutPage/About";
import "./App.css";
import Signup from "./components/auth/Signup";
import Roadmap from "./Pages/RoadmapPage/Roadmap";
import Contact from "./Pages/ContactPage/Contact";
import E404 from "./components/misc/E404";
import ForgotPassword from "./components/auth/ForgotPassword";
import Profile from "./Pages/ProfilePage/Profile";
import CourseMainPage from "./Pages/CourseMainPage/CourseMainPage";
import SideBar from "./components/sidebar/Sidebar";

const App = () => {
  const [user, setUser] = useState("");
  function GetCurrentUser() {
    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUser = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUser();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  GetCurrentUser();
  return (
    <div className="App">
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route exact path="/" element={<Home userdata={user[0]} />} />
            <Route
              exact
              path="/signup"
              element={<Signup userdata={user[0]} />}
            />
            <Route
              exact
              path="/chapter/:topic"
              element={<SideBar userdata={user[0]} />}
            />
            <Route
              exact
              path="/aboutus"
              element={<About userdata={user[0]} />}
            />
            <Route
              exact
              path="/services"
              element={<Courses userdata={user[0]} />}
            />
            <Route
              exact
              path="/login"
              element={<Signup userdata={user[0]} />}
            />
            <Route
              exact
              path="/contact"
              element={<Contact userdata={user[0]} />}
            />
            <Route
              exact
              path="/library"
              element={<Roadmap userdata={user[0]} />}
            />
            <Route
              exact
              path="/profile"
              element={<Profile userdata={user[0]} />}
            />
            <Route
              exact
              path="/error404"
              element={<E404 userdata={user[0]} />}
            />
            <Route exact path="/course/:coursename" element={<CourseMainPage userdata={user[0]} />} />
            <Route path="*" element={<Navigate replace to="/error404" />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/aboutus" element={<About />} />
            <Route exact path="/services" element={<Courses />} />
            <Route exact path="/login" element={<Signup />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/library" element={<Roadmap />} />
            <Route
              exact
              path="/chapter/:topic"
              element={<SideBar />}
            />
            <Route
              exact
              path="/profile"
              element={<Profile />}
            />
            <Route exact path="/error404" element={<E404 />} />
            <Route exact path="/login/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/course/:coursename" element={<CourseMainPage/>} />

            <Route path="*" element={<Navigate replace to="/error404" />} />
          </Routes>
        )}
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>
  <Brand />
  <WhatGPT3 />
  <Features />
  <Possibility />
  <CTA />
  <Blog />
  <Footer /> */}
    </div>
  );
};

export default App;
