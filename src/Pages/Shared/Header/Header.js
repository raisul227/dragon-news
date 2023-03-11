import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='d-flex align-items-center ms-auto'>
                            {user?.uid && <Nav.Link>{user?.displayName}</Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">

                                {user?.photoURL ? <Image src={user?.photoURL} roundedCircle style={{ width: '30px' }}></Image> : <FaUserAlt></FaUserAlt>}
                            </Nav.Link>
                            <Nav>
                                {
                                    user?.uid ?
                                        <Button onClick={handleLogOut} size="sm" variant='outline-danger' className='ml-2'>LogOut</Button>
                                        :
                                        <div className='me-auto d-flex'>
                                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                        </div>
                                }
                            </Nav>
                        </Nav>
                        <div className="d-lg-none">
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;