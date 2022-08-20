import React, { useState } from "react";
import "../auth/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import registerpic from "./register.svg";
import log from "./log.svg";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { auth, storage, db } from "../../firebasecong/Firebasecong";
import { addDoc, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "firebase/auth";
import { isFocusable } from "@testing-library/user-event/dist/utils";

const Signup = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState();
  const [usercred, setUserCred] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [errormess, setErrormess] = useState("");
  const [errortmess, setErrortmess] = useState("");
  const [infomess, setInfomess] = useState("");
  const [vermess, setVermess] = useState("");
  const [sucessmess, setSuccesmess] = useState('');

  const changeauth = (e) => {
    setIsActive((current) => !current);
  };
  const navigate = useNavigate();
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Verify Email")
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  const SignInWithEmail = (e) => {
    e.preventDefault();
    setInfomess("Signing In...");
    // if(!)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUserCred(user);
        if (!userCredentials.user.emailVerified) {
          setInfomess("");
          setErrortmess(`Please verify your email to login.`);
          setTimeout(() => {
            setErrortmess("");
          }, 10000);
          SignOut();
        }
        else {

          setTimeout(() => {
            navigate("/");
            // window.location.reload();
          }, 2000);
        }
      })
      .catch((error) => {
        setInfomess("");
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/missing-email).")
          setErrormess("Enter Email");
        else if (error.message == "Firebase: Error (auth/internal-error).")
          setErrormess("Enter Password");
        else if (error.message == "Firebase: Error (auth/wrong-password).")
          setErrormess("Wrong Password");
        else if (error.message == "Firebase: Error (auth/user-not-found).")
          setErrormess("User not found");
        else if (error.message == "Firebase: Error (auth/invalid-email).")
          setErrormess("Invalid Email");
        else if (
          error.message ==
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        )
          setErrormess(
            "Access to this account has been temporarily disabled due to many failed login attempts. Try again later."
          );
        setTimeout(() => {
          setErrormess("");
        }, 4000);
      });
  };
  const SignUpWithEmail = (e) => {
    e.preventDefault();
    setInfomess("Registering New User...");
    if (!name) {
      setInfomess("");
      setErrormess("Please enter Name");
      setTimeout(() => {
        setErrormess("");
      }, 2000);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          const storageRef = ref(storage, `profile-images/${Date.now()}`);
          // const storageRef =storage().ref(`profile-images`);
          console.log("ok");
          uploadBytes(storageRef).then(() => {
            getDownloadURL(storageRef).then((url) => {
              addDoc(collection(db, "users"), {
                name,
                email,
                password,
                uid: user.uid,
              })
                .then(() => {
                  setInfomess("User Registered!");

                  const auth = getAuth();

                  sendEmailVerification(user);
                  let msg = user.email;
                  setVermess(msg);
                  setInfomess("");
                  // setTimeout(
                  //     () => {
                  //         setErrormess('');
                  //         navigate('/login');
                  //     }, 4000)
                })
                .catch((error) => {
                  setInfomess("");
                  setErrormess("Error!");
                  setTimeout(() => {
                    setErrormess("");
                  }, 2000);
                });
            });
          });
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            setInfomess("");
            setErrormess("User Already Exists! Please Login");
          } else if (error.message == "Firebase: Error (auth/missing-email).") {
            setInfomess("");
            setErrormess("Please Enter Email");
          } else if (
            error.message ==
            "Firebase: Error (auth/admin-restricted-operation)."
          ) {
            setInfomess("");
            setErrormess("Please enter all the fields");
          } else if (error.message == "Firebase: Error (auth/invalid-email).") {
            setInfomess("");
            setErrormess("Invalid Email!");
          } else if (
            error.message == "Firebase: Error (auth/internal-error)."
          ) {
            setInfomess("");
            setErrormess("Please Enter Password");
          } else if (
            error.message == "Firebase: Error (auth/network-request-failed)."
          ) {
            setInfomess("");
            setErrormess("Login Failed, Please check internet connection.");
          } else if (
            error.message ==
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            setInfomess("");
            setErrormess("Password should be at least 6 characters");
          }
          setTimeout(() => {
            setErrormess("");
          }, 4000);
        });
    }
  };
  const SignInWithFirebase = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
        setTimeout(() => {
          navigate("/");
          // window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const SignInWithGithub = (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={isActive ? "containerr sign-up-mode" : "containerr"}>
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Log in</h2> 
              {errormess && (<>
                <div className="error-mess" >{errormess}</div>
              </>)}
              {errortmess && (<>
                <div className="error-mess" >{errortmess}<a className="email-a-verify" onClick={(e) => { e.preventDefault(); sendEmailVerification(usercred); setInfomess("Email Verification Link Sent");   setTimeout(() => {
            setInfomess("");
          }, 6000); }}><strong> Click Here</strong></a> to resend email verification link.</div>
              </>)}
              {infomess && <>
                <div className="info-mess">
                  {infomess}
                </div>
              </>}
              <div className="input-field">
                <i>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </i>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field">
                <i>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </i>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <p className="for-pass">
                Forgot Password? <NavLink className="nav-col" to="/login/forgotpassword">Reset Now!</NavLink>
              </p>
              <input
                onClick={SignInWithEmail}
                type="submit"
                value="Login"
                className="btn solid "
              />
              {/* <p className="social-text for-pass">Or Sign in with social platforms</p>
              <div className="social-media">
                <button
                  onClick={SignInWithFirebase}
                  className="social-icon googlebutton"
                >
                  <i>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                  </i>
                </button>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <button
                  onClick={SignInWithGithub}
                  className="social-icon googlebutton"
                >
                  <i>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </i>
                </button>
              </div> */}
            </form>
            {vermess && (
              <>
                <form className="sign-up-form">
                  <h2 className="title">User Registered!</h2>
                  <div className="ver-mess">
                    <p>An email verification link has been sent to</p>
                    <strong>{vermess}</strong>
                    <br />
                    <p>Verify Your Email and Sign In Now</p>
                  </div>
                </form>
              </>
            )}
            {!vermess && (
              <>
                <form className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  {errormess && <div className="error-mess">{errormess}</div>}
                  {infomess && <div className="info-mess">{infomess}</div>}
                  <div className="input-field">
                    <i>
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </i>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-field">
                    <i>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </i>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-field">
                    <i>
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </i>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    value="Sign up"
                    onClick={SignUpWithEmail}
                  />
                  {/* <p className="social-text">
                    Or Sign up with social platforms
                  </p>
                  <div className="social-media">
                    <button
                      onClick={SignInWithFirebase}
                      className="social-icon googlebutton"
                    >
                      <i>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                      </i>
                    </button>
                    <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                    <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                    <a
                      onClick={SignInWithGithub}
                      className="social-icon googlebutton"
                    >
                      <i>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                      </i>
                    </a>
                  </div> */}
                </form>
              </>
            )}
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                onClick={changeauth}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={log} className="image" alt="img" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                onClick={changeauth}
                className="btn transparent"
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={registerpic} className="image" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
