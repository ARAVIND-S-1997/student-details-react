import { useParams, useHistory } from "react-router-dom"
import axios from "axios";
import { authtoken, authemail } from "../authData";
import { apiurl } from "../apiLink";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function IndividualStudentDetails() {
    const { id } = useParams();
    console.log(id);

    const history = useHistory();
    const [student, setStudent] = useState([]);
    const _id = student._id
    console.log("Id is ", _id)
    const getIndividualStudentReq = () => {
        const auth = {
            token: authtoken,
            email: authemail
        }
        axios({ url: `${apiurl}/addstudent/getstudent/${id}`, method: "get", headers: auth })
            .then((response) => {
                console.log(response)
                const finalData = response.data.find((value) => { return value._id.toString() === id.toString() });
                setStudent(finalData)
            })
    }

    useEffect(getIndividualStudentReq, [id]);

    return (
        <div>
            <Card className="indiv-stud-card">
                <Card.Body>
                    <h4>Name:{student.name}</h4>
                    <h4>Date of birth:{student.dob}</h4>
                    <h4>Email id:{student.emailid}</h4>
                    <h4>Address:{student.address}</h4>
                    <h4>Contact number:{student.contactno}</h4>
                    <h4>Religion:{student.religion}</h4>
                    <ButtonGroup>
                        <Button onClick={() => { history.push(`/editstudent/${_id}`) }} variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>

        </div>
    )
}