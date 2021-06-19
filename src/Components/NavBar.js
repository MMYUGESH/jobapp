import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function NavBar() {

    var logged = false;
    logged = sessionStorage.getItem("logged");
    const logout = () => {
        sessionStorage.clear();
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">Felix</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/companies">Companies</Nav.Link>
                    <Nav.Link href="/rec">Recruiters</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/elogin">For Employers</Nav.Link>
                    <Nav.Link href="/home" onClick={logout} disabled={logged}>Logout</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    )
}

export default NavBar;
