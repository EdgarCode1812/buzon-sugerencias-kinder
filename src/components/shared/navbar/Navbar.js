import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" bg="light" variant="light" className="bg-navbar">
              
                <Nav className="ms-auto pe-3 pt-1 pb-1">
                        <Nav.Item>
                        <Link to="/Login"><Button className="btn-kinder-navbar w-100 p-2">Resultados</Button></Link>
                        </Nav.Item>
                    </Nav>
            </Navbar>

        </div>
    )
}
