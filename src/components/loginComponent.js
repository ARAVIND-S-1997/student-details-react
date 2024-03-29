// react bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

// other packages imports
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';

// other file imports
import { apiurl } from '../apiLink';
import "../styles/loginComp.css"

// hooks imports
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';

// login validation schema
const formValidation = yup.object({
    emailid: yup.string()
        .required("Email field should not be empty")
        .typeError("Invalid emailid")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"),
    password: yup.string().required("Password field should not be empty")
})


// login component
export function Login({ settoken, loginalert }) {

    const [showalert, setshowalert] = useState(false)
    setTimeout(() => {
        setshowalert(true)
    }, 3000);

    // formik functionality
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: { emailid: "", password: "" },
        validationSchema: formValidation,
        onSubmit: (data) => login(data)
    });

    const history = useHistory();

    // login request
    const login = (value) => {
        axios({ url: `${apiurl}/user/login`, method: "POST", data: value })
            .then((response) => {
                if (response.status === 200) {
                    try {
                        const token = response.data.finalToken;
                        const emailid = response.data.emailid;
                        const firstname = response.data.firstname;
                        const lastname = response.data.lastname;
                        localStorage.setItem("token", token);
                        localStorage.setItem("emailid", emailid);
                        localStorage.setItem("firstname", firstname);
                        localStorage.setItem("lastname", lastname);
                        settoken(true)
                        history.push(`/welcomedashboard`)
                    } catch (errors) {
                        console.log("Error is:", errors)
                    }

                }
            })
    }
    return (
        <div className="login-form-container">
            <Card className="login-form-card">
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Group className="login-emailid-part" controlId="formBasicEmail">

                            {/* Email field */}
                            <Form.Label>Email address</Form.Label>
                            <input
                                name="emailid"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.emailid}
                                type="emailid"
                                placeholder="Enter email"
                            />
                            {errors.emailid && touched.emailid ? (<div classname="error">{errors.emailid}</div>) : null}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="login-password-part" controlId="formBasicPassword">

                            {/* password field */}
                            <Form.Label>Password</Form.Label>
                            <input
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type="password"
                                placeholder="Password"
                            />
                            {errors.password && touched.password ? (<div classname="error">{errors.password}</div>) : null}
                        </Form.Group>

                        {/* links for forget password and signup */}
                        <Link to="/forgetpassword">Forget password</Link>
                        <Link to="/signup">Signup</Link>

                        <Button className="login-form-button" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            {/* alert msg*/}
            <div >
                {(showalert === false && loginalert !== undefined) ? <Alert variant='success'>
                    {loginalert}
                </Alert> : null}

            </div>
        </div>

    )
}