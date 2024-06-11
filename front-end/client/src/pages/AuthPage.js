import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService'; // Import AuthService
import './styles/AuthPage.css';
import { useNavigate } from 'react-router-dom';

import logo from "../media/logo-yapflow.svg"

const AuthPage = () => {

    const [mode, setMode] = useState('login');
    const [tag, setTag] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [tagError, setTagError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordValidationError, setPasswordValidationError] = useState('');
    const [tagLogin, setTagLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { valid } = await AuthService.status();
            if (valid) {
                navigate("/");
            }

        };

        fetchData();
    }, [navigate]);

    const validateTag = (tag) => {
        if (!tag) {
            return "Tag is required.";
        }
        return "";
    };

    const validatePassword = (password, isRegistration = false) => {
        if (!password) {
            return "Password is required.";
        }
        if (isRegistration && password.length < 6) {
            return "Password must be at least 6 characters.";
        }
        return "";
    };

    const validatePasswordMatch = (password, passwordValidation) => {
        if (password !== passwordValidation) {
            return "Passwords do not match.";
        }
        return "";
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const tagErr = validateTag(tagLogin);
        const passwordErr = validatePassword(passwordLogin);
        if (tagErr || passwordErr) {
            setTagError(tagErr);
            setPasswordError(passwordErr);
            return;
        }

        setTagError('');
        setPasswordError('');
        const { valid } = await AuthService.login(tagLogin, passwordLogin);
        if (valid) {
            navigate("/");
        } else {
            setLoginError("Invalid credentials.");
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const tagErr = validateTag(tag);
        const passwordErr = validatePassword(password, true);
        const passwordValidationErr = validatePasswordMatch(password, passwordValidation);

        if (tagErr || passwordErr || passwordValidationErr) {
            setTagError(tagErr);
            setPasswordError(passwordErr);
            setPasswordValidationError(passwordValidationErr);
            return;
        }

        setTagError('');
        setPasswordError('');
        setPasswordValidationError('');
        const {valid} = await AuthService.register(tag, password, passwordValidation);
        if (valid) {
            setMode("login");
        } else {
            setLoginError("Registration failed. Please try again.");
        }
    };

    return <>
        <div className="auth-container block shadow">
        <img id='logo' src={logo} alt="" />
            <div className="auth-mode">
                <span
                    id="login-toggle"
                    onClick={() => setMode('login')}
                    className={mode === 'login' ? 'active' : ''}
                >
                    Log in
                </span>
                <span
                    id="register-toggle"
                    onClick={() => setMode('register')}
                    className={mode === 'register' ? 'active' : ''}
                >
                    Register
                </span>
            </div>
            {mode === 'login' && (
                <div className="login">
                    <div className="title-container">
                        <h2 className="title">Nice to see you again!</h2>
                        <span className="sub-title">Please enter your credentials to continue.</span>
                    </div>
                    <form id="login-form" onSubmit={handleLogin}>
                        <div className='input-container'>
                            <label>tag</label>
                            <input
                                className="input"
                                type="text"
                                name="tag"
                                id="tag"
                                value={tagLogin}
                                onChange={(e) => setTagLogin(e.target.value)}
                            />
                            {tagError && <span className="alert">{tagError}</span>}
                        </div>
                        <div className='input-container'>
                            <label>password</label>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                value={passwordLogin}
                                onChange={(e) => setPasswordLogin(e.target.value)}
                            />
                            {passwordError && <span className="alert">{passwordError}</span>}
                        </div>
                        <input className="submit" type="submit" value="Login" />
                        {loginError && <span className="alert">{loginError}</span>}
                    </form>
                </div>
            )}
            {mode === 'register' && (
                <div className="register">
                    <div className="title-container">
                        <h2 className="title">Hi, I see you're new here!</h2>
                        <span className="sub-title">Create your account here.</span>
                    </div>
                    <form id="register-form" onSubmit={handleRegister}>
                        <div className='input-container'>
                            <label>tag</label>
                            <input
                                className="input"
                                type="text"
                                name="tag"
                                id="tag"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                            {tagError && <span className="alert">{tagError}</span>}
                        </div>
                        <div className='input-container'>
                            <label>password</label>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <span className="alert">{passwordError}</span>}
                        </div>
                        <div className='input-container'>
                            <label>confirm password</label>
                            <input
                                className="input"
                                type="password"
                                name="passwordValidation"
                                id="passwordValidation"
                                value={passwordValidation}
                                onChange={(e) => setPasswordValidation(e.target.value)}
                            />
                            {passwordValidationError && <span className="alert">{passwordValidationError}</span>}
                        </div>
                        <input className="submit" type="submit" value="Register" />
                        {loginError && <span className="alert">{loginError}</span>}
                    </form>
                </div>
            )}
        </div>
    </>
};

export default AuthPage;
