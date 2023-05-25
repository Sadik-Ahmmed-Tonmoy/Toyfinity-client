import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  // Register/ SignUp User with email and password
  const signUpUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login User with email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Login With Google 
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // gitHub Login
  const gitHubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }


  // LogOut User
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser)
      setLoading(false)
    });
    return () => {
      unSubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signUpUser, loginUser, googleLogin, gitHubLogin, logOut, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;