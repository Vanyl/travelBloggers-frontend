import '../sass/authentication.sass'
import { useState } from 'react'

const Authentication = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleLogin = () => {
        setIsSignUp(!isSignUp);
    }

    const AuthenticationForm = () => {
        if (isSignUp) {
            return (
                <form className="register-form">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>create</button>
                    <p className="message">Already registered? <a onClick={toggleLogin} href="#">Sign In</a></p>
                </form>)
        } else {
            return (
                <form className="login-form">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>login</button>
                    <p className="message">Not registered? <a onClick={toggleLogin} href="#">Create an account</a></p>
                </form>)
        }
    }

    return (
        <div className="login-page ">
            <div className="form authentication-container">
                <AuthenticationForm />
            </div>
        </div>
    )
}

export default Authentication