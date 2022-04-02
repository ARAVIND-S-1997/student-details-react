import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


const formValidation = yup.object({
    emailid: yup.string().required("Email field should not be empty"),
    password: yup.string().required("Password field should not be empty")
})
export function Login() {

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: { emailid: "", password: "" },
        validationSchema: formValidation,
        onSubmit: (data) => console.log(data)
    })




    return (
        <div className="login-form-container">
            <Card classname="login-form-card">
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Group className="login-emailid-part" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>

                            <input
                                name="emailid"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.emailid}
                                type="emailid"
                                placeholder="Enter email"
                            />
                            {errors.emailid && touched.emailid ? (<div>{errors.emailid}</div>) : null}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="login-password-part" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <input
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                type="password"
                                placeholder="Password"
                            />
                            {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                        </Form.Group>
                        <Link>Forget password</Link>
                        <Link>Signup</Link>
                        <Button className="login-form-button" variant="primary" type="submit">

                            Submit
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>

    )
}