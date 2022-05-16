//  react bootstrap imports
import { Nav } from 'react-bootstrap'

// hooks imports
import { useHistory } from 'react-router-dom'

// other file imports
import { Myclassroom } from './myClassroom';



// welcome dashboard component
export function Welcomedashboard() {
    const authtoken = localStorage.getItem("token");
    const history = useHistory();

    return (
        <div>
            {/* content container */}
            <div>
                {(authtoken !== null) ?
                    <div>
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link onClick={() => { history.push("/myclassroom") }} >My Classroom</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { history.push("/createclassroom") }}>Create Classroom</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <h2 className='welcomdashboard-title' >Clasrooms are</h2>
                        <Myclassroom />
                    </div> : null}
            </div>
        </div>
    )
}