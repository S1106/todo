import {useEffect, useState} from 'react';

export function useAuth(authFirebase) {
    const [authoentification, setAuthentification] = useState(null);
    console.dir(authoentification);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const logIn = () => {
        auth.signInWithPopup(provider);
    }

    const logOut = () => {
        auth.signOut();        
    }

    useEffect(()=>{
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setAuthentification(user);
            } else {
                setAuthentification(null);
            }
        });
    }, [authoentification]);

    return {authoentification, logIn, logOut}
}