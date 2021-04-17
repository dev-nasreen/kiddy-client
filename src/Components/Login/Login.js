import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import firebaseConfig from "./FirebaseConfig/firebaseConfig";
import { FcGoogle } from 'react-icons/fc';
import "firebase/auth";
import './Login.css'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const handleGoogleSignIn =() =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    console.log(result)
    const {displayName, email, photoURL} =  result.user;
    const signedInUser = {name:displayName, email, img: photoURL }
    setLoggedInUser(signedInUser);
    storeAuthToken();
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }
  
  const storeAuthToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
       sessionStorage.setItem('token', idToken );
       history.replace(from);
      }).catch(function(error) {
        console.log(error);
      });
  }
  return (
        <div className="container">
            <div className="row mTop">
                <div className="col-md-10 mx-auto text-center">
                    <h3>Log in to your account</h3>
                    <form action="">
                    <div className="from-group mt-5">
                        <span className=" signIn-btn" onClick={handleGoogleSignIn}>
                             <span style={{display:'inline-block', float:'left', marginRight:'50px' }}><FcGoogle /> </span> 
                             Log in with Google </span>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;