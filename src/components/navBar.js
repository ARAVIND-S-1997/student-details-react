// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

// other file imports
import { authtoken } from '../authData'

// navbar function component
export function NavBar() {
    return (
        <div>
            {/* nav bar container */}
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Student details </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {(authtoken !== null) ?
                            <Navbar.Text>
                                Signed in as: <a href="#login">ARAVIND</a>
                            </Navbar.Text> : null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}