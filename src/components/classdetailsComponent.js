import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { authtoken,authemail } from '../authData';
import { apiurl } from '../apiLink';
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table'
import { ButtonGroup } from 'react-bootstrap';


export function Classdetails() {
    const history = useHistory();
    const { id } = useParams();

    const [students, setstudents] = useState([]);
    console.log("Students are:", students);
    const getStudentsReq = () => {
        const auth = {
            token: authtoken,
        
        }
        axios({ url: `${apiurl}/addstudent/getstudents/${id}`, method: "GET", headers: auth })
            .then((response) => setstudents(response.data.students));
    }

const deleteReq=(sub)=>{
    console.log(sub)
    const auth = {
        token: authtoken,
        emailid:authemail,
        classroomid:id
    }
    axios({url: `${apiurl}/addstudent/deletestudent/${sub}`,method:"POST",headers:auth})
    .then((response) => setstudents(response.data.students));
}

    useEffect(getStudentsReq, [])
    return (
        <div>
            <div className='classdetails-add-student-btn-div'>
                <Button className='classdetails-add-student-btn'onClick={() => { history.push(`/addstudent/${id}`) }} variant="primary" type="submit">
                    Add student
                </Button>
            </div>
            <div>
            <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(students!==null)?  students.map(({ name,_id }) => (
                            <tr>
                                <td className='classdetails-content'>{name}
                                    <ButtonGroup>
                                        <Button onClick={()=>{history.push(`/studentinfo/${_id}`)}} variant="primary">More</Button>
                                        <Button onClick={()=>deleteReq(_id)} variant="danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr> 
                )):null}
              
                  </tbody>
                  </Table>
            </div>
        </div>

    )
}