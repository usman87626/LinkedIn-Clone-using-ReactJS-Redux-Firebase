import React, { useState } from "react";
import "./css/Login.css";
import { auth } from "../firebase/firebase";
import {useDispatch} from 'react-redux'
import {login} from '../features/userSlice'
import {createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
      if(!name){
          return alert("Please Enter a Full Name");
      }
      createUserWithEmailAndPassword(auth,email,password).then((userAuth)=>{
          updateProfile(userAuth.user,{
              displayName: name,
              photoURL: profilePic
          })
          .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
          }).catch((error)=>{
              alert(error);
          })
          
      })
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userAuth)=>{
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
        }))
    }).catch((error)=>{
        alert(error);
    })

  };

  return (
    <div className="login">
      <img
        src="https://th.bing.com/th/id/OIP.RRB-VCGDK-nLL2l1t3EENAHaB2?pid=ImgDet&rs=1"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Full Name(required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
          type="text"
          placeholder="Profile Pic URL(optional)"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
