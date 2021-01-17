import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './../assets/images/logo/flama.png';

class Menu extends Component {
    render() {
        return (
            <Navbar bg="flama" expand="lg" className="shadow-lg">
                <Navbar.Brand href="/">
                    <img src={logo} width="35" className="d-inline-block align-top" alt="flama"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="active text-white" href="/">Stake</Nav.Link>
                        {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;