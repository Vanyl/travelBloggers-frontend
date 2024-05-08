import '../sass/authentication.sass'
import { useState } from 'react'

const Authentication = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const activateContainer = () => {
        setIsActive(true);
    }

    return (
    <div className={`authentication-container ${isLoggedIn ? 'login' : ''} ${isActive ? 'active' : ''}`}>
    <div className="container-forms">
        <div className="container-info">
        <div className="info-item">
            <div className="table">
            <div className="table-cell">
                <p>
                Have an account?
                </p>
                <button className="btn" onClick={toggleLogin}>
                Log in
                </button>
            </div>
            </div>
        </div>
        <div className="info-item">
            <div className="table">
            <div className="table-cell">
                <p>
                Don't have an account? 
                </p>
                <button className="btn" onClick={toggleLogin}>
                Sign up
                </button>
            </div>
            </div>
        </div>
        </div>

        <div className="container-form">
        <form className="form-item login">
            <div className="table">
            <div className="table-cell">
                <input name="email" placeholder="Email" type="text" /><input name="password" placeholder="Password" type="Password" />
                <button className="btn" onClick={activateContainer}>
                Log in
                </button>
            </div>
            </div>
        </form>
        <form className="form-item register">
            <div className="table">
            <div className="table-cell">
                <input name="email" placeholder="Email" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="password" placeholder="Password" type="Password" />
                <button className="btn" onClick={activateContainer}>
                Sign up
                </button>
            </div>
            </div>
        </form>
        </div>
    </div>
    </div>
    )
}

export default Authentication