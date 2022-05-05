// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { firstname, lastname } from './welcomeDashboard.js';
// other file imports
import { authtoken } from './welcomeDashboard.js';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// navbar function component
export function NavBar() {
    const history = useHistory();
    const[state,setstate]=useState("false")
    return (
        <div>
            {/* nav bar container */}

            {(authtoken !== null) ?
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand href="/welcomedashboard" >Student details </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className='nav-bar-btn-comb'>
                                <Navbar.Text>
                                    Signed in as: <a href="/userdetails">{firstname} {lastname}</a>
                                </Navbar.Text>
                                <Button className='logout-btn'
                                    onClick={() => {
                                        localStorage.clear();
                                        setstate("true");
                                        history.push("/login")
                                    }} variant="secondary">Logout</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> :
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand >Student details </Navbar.Brand>
                    </Container>
                </Navbar>}
        </div>
    )
}