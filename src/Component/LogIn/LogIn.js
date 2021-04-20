import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from '../LogIn/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newSignInUser = { name: displayName, email: email }
                setLoggedInUser(newSignInUser)
                history.replace(from);
            })
    }

    console.log(loggedInUser);
    return (
        <div className="text-center mt-4">

            <h1>This is Login</h1>
            <button variant="success" onClick={handleGoogleSingIn} >Google SignIn </button>
        </div>
    );
};
export default LogIn;

