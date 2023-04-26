import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://i.postimg.cc/QtFWbkg3/153-1537944-png-file-svg-gaming-stick-logo-png-transparent.png"
                            width="150"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>Hey Gamer!</strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header