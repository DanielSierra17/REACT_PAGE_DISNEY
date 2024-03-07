import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        setError('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Por favor, ingresa un email válido.');
            return;
        }

        window.location.href = '/Home';
    }

    return (
        <div className='content-form'>
        <div className='form'>
            <h2>Iniciar sesión</h2>
            {error && <div className='error'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo:</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
        </div>
    );
}

export default Login;