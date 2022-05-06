// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';


// navbar function component
export function NavBar() {

    const authtoken = localStorage.getItem("token");
    const firstname=localStorage.getItem("firstname");
    const lastname=localStorage.getItem("lastname");

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