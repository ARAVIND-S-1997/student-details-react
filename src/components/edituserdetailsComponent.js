// react bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// other packages imports
import * as yup from 'yup';
import axios from 'axios';

// hooks imports
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

// other file imports
import { apiurl } from '../apiLink.js';
import { useParams } from 'react-router-dom';

// validation schema
const formValidation = yup.object({
    firstname: yup
        .string()
        .required("First name should not be empty")
        .min(3, "First name should be minimum 3 characters")
        .max(15, "First name should not be more than 10 characters"),
    lastname: yup
        .string()
        .required("Last name should not be empty")
        .min(1, "Last name should be minimum 3 characters")
        .max(15, "Last name should not be more than 10 characters"),
    dob: yup
        .string()
        .required("Date of birth should not be empty"),
    emailid: yup
        .string()
        .required("Email field should not be empty")
        // eslint-disable-next-line 
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"),
})

// edit user detail component
export function Edituserdetails() {

    const authtoken = localStorage.getItem("token");
    const authemail = localStorage.getItem("emailid");

    const history = useHistory();
    const{id}=useParams
    const [userdetails, setuserdetails] = useState([]);
    console.log(userdetails);

    // get user api req
    const userdetailReq = () => {
        const auth = {
            token: authtoken,
            emailid: authemail
        }
        axios({ url: `${apiurl}/home/userdetails`, method: "GET", headers: auth })
            .then((response) => setuserdetails(response.data))
    }
 

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: { firstname: userdetails.firstname, lastname: userdetails.lastname, dob: userdetails.dob, emailid: userdetails.emailid },
        enableReinitialize: true,
        validationSchema: formValidation,
        onSubmit: (data) => updateReq(data)
    })

    // update user api req
    const updateReq = (datas) => {
        const auth = {
            token: authtoken,
            email: authemail
        }
        axios({ url: `${apiurl}/home/edituserdetails`, method: "POST", headers: auth, data: datas })
            .then((response) => {
                if (response.status == 200) {
                    history.push("/userdetails")
                }
            })
    }
    useEffect(userdetailReq, [id])
    return (
        <div>
            <div className="edituser-form-container">
                <Card className="edituser-form-card">
                    <Card.Body>
                        <Form onSubmit={handleSubmit} className="edituser-form">
                            <Form.Group className="edituser-firstname-part" controlId="formBasicEmail">

                                {/* firstname field */}
                                <Form.Label>First name</Form.Label>
                                <input
                                    name="firstname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstname}
                                    type="First name"
                                    placeholder="Enter first name"
                                />
                                {errors.firstname && touched.firstname ? (<div>{errors.firstname}</div>) : null}
                            </Form.Group>
                            <Form.Group className="edituser-lastname-part" controlId="formBasicEmail">

                                {/* lastname field*/}
                                <Form.Label>Last name</Form.Label>

                                <input
                                    name="lastname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastname}
                                    type="lastname"
                                    placeholder="Enter last name"
                                />
                                {errors.lastname && touched.lastname ? (<div>{errors.lastname}</div>) : null}
                            </Form.Group>
                            <Form.Group className="edituser-dob-part" controlId="formBasicEmail">

                                {/* date of birth field*/}
                                <Form.Label>Date of birth</Form.Label>
                                <input
                                    name="dob"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dob}
                                    type="date"
                                />
                                {errors.dob && touched.dob ? (<div>{errors.dob}</div>) : null}
                            </Form.Group>
                            <Form.Group className="edituser-emailid-part" controlId="formBasicPassword">

                                {/* email id field*/}
                                <Form.Label>Email id</Form.Label>
                                <input
                                    name="emailid"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailid}
                                    type="emailid"
                                    placeholder=" Enter email id"
                                />
                                {errors.emailid && touched.emailid ? (<div>{errors.emailid}</div>) : null}
                            </Form.Group>

                            <Button className="edituser-form-button" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}