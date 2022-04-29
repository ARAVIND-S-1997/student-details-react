// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { firstname, lastname } from '../authData'
// other file imports
import { authtoken } from '../authData'
import { useHistory } from 'react-router-dom';

// navbar function component
export function NavBar() {
    const history=useHistory()
    return (
        <div>
            {/* nav bar container */}
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Student details </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {(authtoken !== null) ?
                            <div className='nav-bar-btn-comb'>
                                <Button onClick={()=>history.push("/welcomedashboard")} variant="secondary">Home</Button>
                                <Navbar.Text>
                                    Signed in as: <a href="/userdetails">{firstname} {lastname}</a>
                                </Navbar.Text>
                            </div>
                            : null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}