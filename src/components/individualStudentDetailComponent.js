import { useParams,useHistory } from "react-router-dom"
import axios from "axios";
import { authtoken } from "../authData";
import { apiurl } from "../apiLink";
import { useState,useEffect } from "react";


import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function IndividualStudentDetails() {
    const { id } = useParams();
    console.log(id);

    const history=useHistory();
    const [student, setStudent] = useState([]);
    console.log(student)
    const getIndividualStudentReq = () => {
        const auth = {
            token: authtoken
        }
        axios({ url: `${apiurl}/addstudent//getstudent/${id}`, method: "get", headers: auth })
            .then((response) => setStudent(response.data.getStudentReq.students))
    }
    useEffect(getIndividualStudentReq, [id]);
    return (
        <div>
            {student.map(({ name, dob, emailid, address, contactno, religion,_id }) => (
                <div>
                    <h1>Name:{name}</h1>
                    <h1>Date of birth:{dob}</h1>
                    <h1>Email id:{emailid}</h1>
                    <h1>Address:{address}</h1>
                    <h1>Contact number:{contactno}</h1>
                    <h1>Religion:{religion}</h1>
                    <ButtonGroup>
                        <Button onClick={()=>{history.push(`/editstudent/${_id}`)}} variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                </div>
            ))}
        </div>
    )
}