import { Children, createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const exitingUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // logoout user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error.message)
            // An error happened.
        });
    }

    //    update Profile and name 
    const updateProfileName = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
    
             setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [])




    const authInfo = {
        user,
        loading,
        setLoading,
        newUser,
        logOutUser,
        exitingUser,
        updateProfileName,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;