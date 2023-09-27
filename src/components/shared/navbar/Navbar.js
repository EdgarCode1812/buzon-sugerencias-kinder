import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" bg="light" variant="light" className="bg-navbar">
              
                <Nav className="ms-auto pe-3 pt-1 pb-1">
                        <Nav.Item>
                            <Button type="button" className="btn-kinder-navbar w-100 p-2">Resultados</Button>
                        </Nav.Item>
                    </Nav>
            </Navbar>

        </div>
    )
}
