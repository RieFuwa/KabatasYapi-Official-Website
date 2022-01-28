import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Styles.css';
function Header() {
    return <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand class='navbar-brand' href="/">KABATAŞ YAPI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" navbar-collapse">

                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Nav.Link class="nav-link " href="/">Ana Sayfa</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " href="/About">Hakkımızda</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " href="/Service">Ürün ve Hizmetlerimiz</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link " href="/Contact">İletişim &#9742;</Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

}

export default React.memo(Header);


