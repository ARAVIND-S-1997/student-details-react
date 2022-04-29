import axios from "axios"
import { authtoken, authemail } from "../authData"
import { apiurl } from "../apiLink"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Userdetails() {

    const [userdetails, setuserdetails] = useState([]);
    console.log(userdetails);
    const userdetailReq = () => {

        const auth = {
            token: authtoken,
            emailid: authemail
        }
        axios({ url: `${apiurl}/home/userdetails`, method: "GET", headers: auth })
            .then((response) => setuserdetails(response.data))
    }
    useEffect(userdetailReq, [])
    return (
        <div >
            <Card className="">
                <Card.Body>
                    <h1>User details:</h1>
                    <h3>Name: {userdetails.firstname} {userdetails.lastname}</h3>
                    <h4>Date of birth: {userdetails.dob}</h4>
                    <h4>Email address:{userdetails.emailid}</h4>
                    <Button  variant="primary">Edit user detail</Button>
                </Card.Body>
            </Card>
        </div>
    )
}