//  react bootstrap imports
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

// hooks imports
import { useHistory } from 'react-router-dom'

// other file imports

import { Myclassroom } from './myClassroom';


export const authtoken = localStorage.getItem("token");
export const authemail = localStorage.getItem("emailid");
export const firstname=localStorage.getItem("firstname");
export const lastname=localStorage.getItem("lastname");
console.log(authtoken, authemail,firstname,lastname);



// welcome dashboard component
export function Welcomedashboard() {
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
                        <h2 className='welcomdashboard-title' >Clasrooms are:</h2>
                        <Myclassroom/>
                    </div> : null}
                </div>
        </div>
    )
}