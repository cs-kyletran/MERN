import './Login.css'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/firebase/firebaseConfig';
import GoogleSignIn from '../components/GoogleSignIn';

export default function Login() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const setUserHandler = (e) => {
        setUser(e.target.value)
    }

    const setPassHandler = (e) => {
        setPass(e.target.value)
    }

    const submitHandler = async () => {
        await createUserWithEmailAndPassword(auth, user, pass);
        alert("You have been registered successfully!")
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1>Welcome to Tien Productions!</h1>
                <p>Sign Up with email and password</p>
                <div className='email-password-container'>
                    <p>Email: </p>
                    <input value={user} onChange={setUserHandler} />
                    <p>Password: </p>
                    <input value={pass} onChange={setPassHandler} />
                </div>
                <div className='seperator-block'>
                    <button onClick={submitHandler} className='submit-button'>Submit</button>
                    <p className='or-text'>or</p>
                    <p className='sign-in-text'>Sign up with Google</p>
                </div>
                <GoogleSignIn />
            </div>
        </div>
    );
};