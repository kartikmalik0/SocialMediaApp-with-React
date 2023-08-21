import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { DASHBOARD, LOGIN } from '../lib/routes';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import isUsernameExists from '../utils/IsuserExists';

export function useAuth() {
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isloading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
        // console.log(user)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const ref = doc(db, 'users', authUser.uid)
            const docSnap = await getDoc(ref)
            setUser(docSnap.data())
            setLoading(false)
        }
        if (!authLoading) {
            if (authUser) {
                fetchData()
            } else {
                setLoading(false)
            }
        }

    }, [authLoading])

    return {
        user,
        isloading,
        error: error,

    }
}





export function useLogin() {
    const [isLoading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()
    async function Login({ email, password, redirectTO = DASHBOARD }) {

        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast({
                title: "You are logged in ",
                status: 'success',
                isClosable: true,
                position: 'top',
                duration: 5000,
            })
            navigate(redirectTO)
        } catch (error) {
            toast({
                title: "Logging in failed ",
                description: error.message,
                status: 'error',
                isClosable: true,
                position: 'top',
                duration: 5000,
            })
            setLoading(false)

            return false //Return false if login failed
        }

        setLoading(false)
        return true // Return true if login succeed
    }
    return { Login, isLoading }
}


export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function register({
        username,
        email,
        password,
        redirectTo = DASHBOARD,
    }) {
        setLoading(true);

        const usernameExists = await isUsernameExists(username);

        if (usernameExists) {
            toast({
                title: "Username already exists",
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            setLoading(false);
        } else {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);

                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: "",
                    date: Date.now(),
                });

                toast({
                    title: "Account created",
                    description: "You are logged in",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });

                navigate(redirectTo);
            } catch (error) {
                toast({
                    title: "Signing Up failed",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
            } finally {
                setLoading(false);
            }
        }
    }

    return { register, isLoading };
}




export function useLogout() {
    const [signOut, isLoading, error] = useSignOut(auth);
    const toast = useToast()
    const navigate = useNavigate()
    async function Logout() {
        if (await signOut()) {
            toast({
                title: 'Successfully logged out',
                isClosable: true,
                position: 'top',
                duration: 5000,
                status: 'success'
            })
            navigate(LOGIN)
        } // else show error toast becaousse signout return false if returns failed
    }

    return { Logout, isLoading }
}