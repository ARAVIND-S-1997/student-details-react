// react bootstrap imports
import Card from 'react-bootstrap/Card';

// other packages imports
import axios from "axios";

// hooks imports
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"

// other file imports
import { apiurl } from "../apiLink";




// import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";

export function IndividualStudentDetails() {

    const authtoken = localStorage.getItem("token");
    const authemail = localStorage.getItem("emailid");
  
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

    // delete marks req
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


    useEffect(getIndividualStudentReq, [authtoken]);

    return (
        <div>
            <div>
                <h1 className="indiv-stud-titles">Student Information:</h1>
                <Card className="indiv-stud-info-card">
                    <Card.Body>
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
                            <h1 className="indiv-stud-titles">Mark details:</h1>
                            <Card className="indiv-stud-marks-card">
                                <Card.Body>
                                    <h2>Month:{month}</h2>
                                    <h4>Tamil:{tamil}</h4>
                                    <h4>English:{english}</h4>
                                    <h4>Maths:{maths}</h4>
                                    <h4>Science:{science}</h4>
                                    <h4>Social:{social}</h4>
                                    <h4>Total:{total}</h4>
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




