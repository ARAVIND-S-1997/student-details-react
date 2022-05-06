// react bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// other packages imports
import axios from "axios"

// hooks imports
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

// other file imports

import { apiurl } from "../apiLink"

// user detail component
export function Userdetails() {

    const authtoken = localStorage.getItem("token");
    const authemail = localStorage.getItem("emailid");

const history=useHistory();
    const [userdetails, setuserdetails] = useState([]);
    console.log(userdetails);

    // api req
    const userdetailReq = () => {
        const auth = {
            token: authtoken,
            emailid: authemail
        }
        axios({ url: `${apiurl}/home/userdetails`, method: "GET", headers: auth })
            .then((response) => setuserdetails(response.data))
    }
    useEffect(userdetailReq, [authtoken])
    return (
        <div >
            <Card className="">
                <Card.Body>
                    <h1>User details:</h1>
                    <h3>Name: {userdetails.firstname} {userdetails.lastname}</h3>
                    <h4>Date of birth: {userdetails.dob}</h4>
                    <h4>Email address:{userdetails.emailid}</h4>
                    <Button onClick={()=>history.push(`/edituserdetails/${userdetails._id}`)}  variant="primary">Edit user detail</Button>
                </Card.Body>
            </Card>
        </div>
    )
}