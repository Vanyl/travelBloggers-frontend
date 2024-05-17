import '../sass/authentication.sass';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = ({isLoggedIn, setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);
    const [notification, setNotification] = useState(null);

    const toggleLogin = () => {
        setIsSignUp(!isSignUp);
        setError(null) //clear error
    };

    const onSubmitLogin = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); 
        const data = Object.fromEntries(formData.entries()); 

        try {
            const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const accessToken = await response.json();
                const token = accessToken.token;
                localStorage.setItem('accessToken', token);
                console.log(accessToken.message)
                setIsLoggedIn(true); // Mise à jour de l'état de connexion
                navigate("/");
            } else {
                const { error } = await response.json();
                setError(error);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };


    const onSubmitRegister = async (event)  => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); 
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/register`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(data);
            console.log(response);
            if (response.ok) {
                const  newUser  = await response.json();
                console.log(newUser);
                setNotification({ type: 'success', message: 'You have been successfully registered ! You can log in now with your email.' });
                setIsSignUp(false); // Switch to login form after successful registration
            } else {
                const { error } = await response.json();
                setNotification({ type: 'error', message: `Registration failed: ${error}` });
            }
        } catch (error) {
            console.error('Error while posting a message :', error);
            setNotification({ type: 'error', message: 'An error occurred. Please try again later.' });
        }
    }

    const AuthenticationForm = () => {
        if (isSignUp) {
            return (
                <form className="register-form" onSubmit={onSubmitRegister}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="text" name="name" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button type='submit'>register</button>
                    <p className="message">Already registered? <a onClick={toggleLogin} href="#">Sign In</a></p>
                </form>
            );
        } else {
            return (
                <form className="login-form" onSubmit={onSubmitLogin}>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button type='submit'>login</button>
                    <p className="message">Not registered? <a onClick={toggleLogin} href="#">Create an account</a></p>
                </form>
            );
        }
    };

    return (
        <div className='overlay'>
            <div className="login-page">
                <div className="form-authentication authentication-container">
                    <AuthenticationForm />
                    {error && <p className="error-message">{error}</p>}
                    {notification && <p className={`notification ${notification.type}`}>{notification.message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Authentication;