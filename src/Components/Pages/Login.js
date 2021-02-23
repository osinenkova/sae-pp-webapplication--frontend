import React from 'react';
import apiClient from '../../Services/api'
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
        .then(response => {
            return apiClient.post('/login', {
                email: email,
                password: password
            }).then(response => {
                if (response.status === 204) {
                    props.login();
                    history.push("/dashboard");
                }
            })
        });
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>  
            </form>
        </div>
    );
}

export default Login;