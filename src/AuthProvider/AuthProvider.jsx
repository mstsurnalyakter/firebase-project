import  { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);

  const singUpUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const singInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const signInWithGoogle = () =>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  }

  const signInWithFacebook = () =>{
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth,facebookProvider);

  }

  const signOutUser = () =>{
    return signOut(auth)
  }

  const authInfo = {
    singUpUser,
    singInUser,
    user,
    setUser,
    signInWithGoogle,
    signInWithFacebook,
    signOutUser
  };

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      if (currentUser) {
        setUser(currentUser)
      } else {
        //
        setUser(null)
      }
    })
    return () => unsubscribe();

  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children:PropTypes.node
}

export default AuthProvider