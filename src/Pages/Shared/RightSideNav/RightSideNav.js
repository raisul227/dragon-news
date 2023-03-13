import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import BrandCarosel from '../BrandCarosel/BrandCarosel';


const RightSideNav = () => {
    const { loginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} className='mb-2 ' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className="mt-4">
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;