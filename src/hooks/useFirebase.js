import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializedAuthentication from '../Firebase/firebase.init';

initializedAuthentication();
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(' ')

    const auth = getAuth();

    const signUpNewUser = (email, password) =>{

        createUserWithEmailAndPassword(auth, email, password)
            .then(reuslt => {
                setUser(reuslt.user)
            })
            .catch(error=>{
                setError(error.message)
            })
    }
    
    const signInUser = (email, password) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUser(result.user)
        })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)

            .then(result=>{
               setUser(result.user)
            //    console.log(result.user);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    }, [])


    return {
        user,
        handleGoogleSignIn,
        handleSignOut,
        signUpNewUser,
        signInUser,
        error,
        setError
    }

}

export default useFirebase;