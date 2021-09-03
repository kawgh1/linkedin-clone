import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    //redux
    const dispatch = useDispatch();

    

    const loginToApp = (event) => {
        event.preventDefault();
        

    };

    // REGISTER
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        // FIREBASE - create new user in Firebase
        auth.createUserWithEmailAndPassword(email, password)
        // send firebase the user provided name and photo
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            // REDUX - then take those values back from Firebase userAuth object and assign them to our Redux user in state
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    })
                );
            });
        }).catch(error => alert(error, error.message));

    }


    return (
        <div className='login'>
            <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
                alt='LinkedIn Logo' />

                {/* Log in Form */}
                <form>
                    <input 
                        value={name}
                        onChange={(event) => setName(event.target.value)} 
                        placeholder='Full Name (required if registering)' 
                        type='text' 

                        />

                    <input 
                        value={profilePic}
                        onChange={(event) => setProfilePic(event.target.value)}
                        placeholder='Profile Pic URL (optional)' 
                        type="text" 
                    />

                    <input 
                        value = {email} 
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Email' 
                        type="email" 
                    />

                    <input 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                        placeholder='Password' 
                        type="password" 
                    />

                    <button type='submit' onClick={loginToApp}>Sign In</button>


                </form>

                <p>
                    Not a member ? {"  "}
                    <span className='login__register' onClick={register}>
                        Register Now
                    </span>
                </p>
        </div>
    );
}

export default Login
