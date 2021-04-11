import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Nav.css';

class NavComponent extends Component {
    render () {
        return (
            <Navbar className="nav-container nav justify-content-end" bg='dark' variant='dark' fixed='top' expand='sm'>
                <Nav.Link href="/register"><Button>Register</Button></Nav.Link>
                <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
            </Navbar>
        )
    }
}

export default NavComponent;