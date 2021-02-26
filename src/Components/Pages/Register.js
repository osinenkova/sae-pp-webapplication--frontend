import React from 'react';
import apiClient from '../../Services/api'
import { useHistory } from "react-router-dom";

import Errors from '../Errors'

const Register = (props) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordRepeat, setPasswordRepeat] = React.useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('/register', {
                name: name,
                email: email,
                password: password
            })
                .then(response => {
                    if (response.status === 204) {
                        history.push("/welcome");
                    }
                })
        });
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                     type="name"
                     name="name"
                     placeholder="Name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="passwordRepeat"
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    onChange={e => setPasswordRepeat(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;