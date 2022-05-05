// react bootstrap imports
import Card from 'react-bootstrap/Card';

// other packages imports
import axios from "axios";

// hooks imports
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"

// other file imports
import { authtoken, authemail } from "../authData";
import { apiurl } from "../apiLink";




// import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";

export function IndividualStudentDetails() {
    const { id } = useParams();
    console.log(id);

    const history = useHistory();

    const [student, setstudent] = useState([]);
    console.log(student);

    const { marks } = student;
    console.log(marks);

    const _id = student._id
    console.log("Id is ", _id)


    // indivdual student req
    const getIndividualStudentReq = () => {
        const auth = {
            token: authtoken,
            email: authemail,
        }
        axios({ url: `${apiurl}/addstudent/getstudent/${id}`, method: "get", headers: auth })
            .then((response) => {
                console.log(response)
                const finalData = response.data.find((value) => { return value._id.toString() === id.toString() });
                setstudent(finalData)
            })
    }

    const deletemarks = (value) => {

        console.log(value)
        const auth = {
            token: authtoken,
            emailid: authemail,
            student_id: id
        }
        axios({ url: `${apiurl}/addstudent/deletemarks/${value}`, method: "post", headers: auth })
            .then((response) => {
                console.log(response)
                const finalData = response.data.find((value) => { return value._id.toString() === id.toString() });
                setstudent(finalData)
            })
    }


    useEffect(getIndividualStudentReq, [id]);

    return (
        <div>
            <div>
                <Card className="indiv-stud-card">
                    <Card.Body>
                        <h1>Basic info:</h1>
                        <h4>Name:{student.name}</h4>
                        <h4>Date of birth:{student.dob}</h4>
                        <h4>Email id:{student.emailid}</h4>
                        <h4>Address:{student.address}</h4>
                        <h4>Contact number:{student.contactno}</h4>
                        <h4>Religion:{student.religion}</h4>
                        <ButtonGroup>
                            <Button onClick={() => { history.push(`/editstudent/${_id}`) }} variant="primary">Edit</Button>
                            <Button onClick={() => { history.push(`/addmarks/${_id}`) }} variant="secondary">Add marks</Button>
                        </ButtonGroup>

                    </Card.Body>
                </Card>
            </div>

            <div>
                {(marks !== undefined) ? marks.map(({ month, tamil, english, maths, science, social, total, _id }) => {
                    return (
                        <div>
                            <Card className="indiv-stud-marks-card">
                                <Card.Body>
                                    <h1>Month:{month}</h1>
                                    <h3>Tamil:{tamil}</h3>
                                    <h3>English:{english}</h3>
                                    <h3>Maths:{maths}</h3>
                                    <h3>Science:{science}</h3>
                                    <h3>Social:{social}</h3>
                                    <h3>Total:{total}</h3>
                                    <ButtonGroup>
                                        <Button onClick={() => { history.push(`editmarks/${_id}`) }} variant="primary">Edit</Button>
                                        <Button onClick={() => deletemarks(_id)} variant="danger">Delete</Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }) : null}
            </div>

        </div>
    )
}