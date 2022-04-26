import { useParams, useHistory } from "react-router-dom"
import axios from "axios";
import { authtoken, authemail } from "../authData";
import { apiurl } from "../apiLink";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


// import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function IndividualStudentDetails() {
    const { id } = useParams();
    console.log(id);

    const history = useHistory();
    const [student, setstudent] = useState([]);
    const _id = student._id
    console.log("Id is ", _id)

    // const dateofbirth=student.dob;

    // function reverseDob(date){
    //     const splitData=date.split("");
    //     console.log(splitData);
    //     const reverseData=splitData.reverse();
    //     console.log(reverseData);
    //     const joinData=reverseData.join("");
    //     console.log(joinData);
    //     return joinData

    // }

    const getIndividualStudentReq = () => {
        const auth = {
            token: authtoken,
            email: authemail
        }
        axios({ url: `${apiurl}/addstudent/getstudent/${id}`, method: "get", headers: auth })
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
                        <Button onClick={() => { history.push(`/editstudent/${_id}`) }} variant="primary">Edit</Button>
                    </Card.Body>
            </Card>
            </div>
            <Button onClick={()=>{history.push(`/addmarks/${_id}`)}}  variant="primary">Add marks</Button>
        </div>
    )
}