//  react bootstrap imports
import { Nav } from 'react-bootstrap'

// hooks imports
import { useHistory } from 'react-router-dom'

// other file imports
import { authtoken} from '../authData'

// welcome dashboard component
export function Welcomedashboard() {
    const history = useHistory();
    return (
        <div>
            {/* content container */}
                <div>
                {(authtoken !== undefined) ?
                    <div>
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link onClick={() => { history.push("/myclassroom") }} >My Classroom</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { history.push("/createclassroom") }}>Create Classroom</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div> : null}
                </div>
        </div>
    )
}