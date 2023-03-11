import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUserProfile(name, photoUrl)
                handleVerifyEmail();
                toast.success("Please Verify Your Email")
            })
            .catch(e => setError(e.message))
    }
    const handleUserProfile = (name, photoUrl) => {
        updateUserProfile({
            displayName: name,
            photoURL: photoUrl
        })
    }
    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
    }
    return (
        <Form onSubmit={handleRegister} className='mx-auto' style={{ width: '80%' }}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Photo Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter Email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text className='mb-2'>
                <span>Already Have An Account? <Link to='/login'>Login</Link></span>
            </Form.Text>
            <Form.Text className="d-block mb-2 text-danger">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;