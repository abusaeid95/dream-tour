import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import intializeFirebase from "../Firebase/firebase.initialize";
intializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).finally(() => setIsloading(false))
    };

    return {
        handleGoogleLogin,
        user,
        handleLogout,
        isLoading
    };
};

export default useFirebase;