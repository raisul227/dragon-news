import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { logInUser, setLoader } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error('Please Verify Your Email')
                }

            })
            .catch(e => setError(e.message))
            .finally(() => {
                setLoader(false)
            })
    }
    return (
        <Form onSubmit={handleLogin} className='mx-auto' style={{ width: '80%' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className='mb-2'>
                <span>Create New</span> <Link to='/register'>Account</Link>
            </Form.Text>
            <Form.Text className="d-block mb-2 text-danger">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;