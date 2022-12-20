import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializedAuthentication from '../Firebase/firebase.init';

initializedAuthentication();
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({})
    console.log(user);

    const auth = getAuth();
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
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])


    return {
        user,
        handleGoogleSignIn,
        handleSignOut
    }

}

export default useFirebase;