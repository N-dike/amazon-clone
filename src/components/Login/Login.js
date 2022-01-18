import './Login.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        const auth = getAuth();
       signInWithEmailAndPassword(auth, email, password)
        .then((response) =>{
            console.log(response)
            toast.success(`Login Successful, redirecting to homepage`);
            setTimeout(function () { navigate("/") }, 1000);
        })
        .catch(error => { 
            toast.error(`unable to Login, please check your credentials`);
       console.warn(error.message)
    })
    }
    const register = e =>{
        e.preventDefault()
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((response) =>{
                console.log(response)
                toast.success(`Registration Successful, redirecting to homepage`);
                setTimeout(function () { navigate("/") }, 1000);
            })
            .catch(error => { 
                toast.error(`unable to register, please check your credentials`);
           console.warn(error.message)
        })
    }
    const googleAuth = (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
signInWithPopup(auth, provider)
.then((result) =>{
    toast.success(`Login Successful, redirecting to homepage`)
    setTimeout(function () {navigate("/")}, 1000)
})
.catch(e => {
    toast.error(`unable to login, please check your cridentials`)
    setTimeout(function () {navigate("/login")}, 4000)
    console.warn(e.message);
})
  
    }
    return (
        <div className="login">
             <Link to="/">
                <img
                    className="login-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="" />
            </Link>
        <div className="login-container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input type="password" value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <button onClick={signIn}>Sign In</button>
            </form>

            <p>
            By continuing, you agree to the Amazon FAKE Conditions of Use and Privacy Notice.
            </p>

            <button className="login-register" onClick={register}>Create your amazon account</button>
            <br />
                <p style={{ textAlign: "center" }}>
                    Login With :
                </p>

                <a
                    className="login-googleButton"
                    onClick={googleAuth}
                >
                    <img
                        className="login-googleIcon"
                        src="images/GoogleSignInLight.png"
                        alt="google login" />
                </a>
            </div>
        </div>
    )
}


export default Login