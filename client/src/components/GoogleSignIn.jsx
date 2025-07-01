import './GoogleSignIn.css'
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '/firebase/firebaseConfig';

export default function GoogleSignIn() {
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            alert("Welcome ${user.displayName}!");
            console.log(user);
        } catch (error) {
            console.log('Google Sign-In Error', error);
        }
    }

    return (
        <div className="google-sign-in">
            
            <button onClick={handleGoogleSignIn} className="google-button">
                <img src='/google.png' alt='google.png' className='google-logo' /> Sign In
            </button>
        </div>
    )
}