import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    return (
        <div className='login'>
            Login
        </div>
    )
}

export default Login
