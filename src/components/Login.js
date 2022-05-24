import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase"


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            console.log(auth);
            navigate('/')
        }).catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it successfully created a new user
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://tse4.mm.bing.net/th?id=OIP.6yRwdFfLz_oRlms5qE6WNgHaC4&pid=Api&P=0&w=401&h=156" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="" id="" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id="" />
                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p><strong>By continuing, you agree to <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940'> Amazon's Conditions of Use</a> and <a href='https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380'>Privacy Notice</a></strong></p>

                <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
