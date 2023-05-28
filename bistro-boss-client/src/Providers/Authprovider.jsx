import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';

export const Authcontext=createContext(null);
const auth=getAuth(app)

const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    const createUser=(email,password)=>{
      setloading(true)
      return createUserWithEmailAndPassword(auth, email , password)
    }
    const signIn=(email, password)=>{
      return signInWithEmailAndPassword(auth,email, password)
    }
    const updateUserProfile = (name,photo)=>{
     return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
      })
    }
    const logOut=()=>{
      setloading(true)
      signOut(auth)
    }
///Always will be check user state
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setuser(currentUser)
        console.log("current user",currentUser)
        setloading(false);
      })
      return ()=>{
        return unsubscribe;
      }
    },[])

    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
        

    }
  return (
    <Authcontext.Provider value={authinfo}>
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovider