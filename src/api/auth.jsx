import { useEffect, useState } from "react";
import { auth } from '../Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

const Auth = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Logged out sucessful');
        }).catch(error => console.log(error));

    };

    return { authUser, userSignOut };
};



export default Auth;