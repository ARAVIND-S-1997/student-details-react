//  react bootstrap imports
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

// hooks imports
import { useHistory } from 'react-router-dom'

// other file imports
import { authtoken} from '../authData'
import { Myclassroom } from './myClassroom';

// welcome dashboard component
export function Welcomedashboard() {
    const history = useHistory();
    // const{id}=useParams();
    // useEffect([id]);
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
                        <Myclassroom/>
                    </div> : null}
                </div>
        </div>
    )
}