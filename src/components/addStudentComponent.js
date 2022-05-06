// react bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// other packages imports
import * as yup from 'yup';
import axios from 'axios';


// hooks imports
import { useFormik } from 'formik';

// other file imports
import { apiurl } from '../apiLink';
import { useParams, useHistory } from 'react-router-dom';

// validationSchema for adding new student
const formValidation = yup.object({
    name: yup
        .string()
        .required("Name should not be empty")
        .min(3, "Name should not be less than 3 characters")
        .max(20, "Name should not be more than 20 characters"),
    dob: yup
        .string()
        .required("Select the date of birth"),
    emailid: yup
        .string()
        .required("Email field should not be empty")
        // eslint-disable-next-line 
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"),
    address: yup
        .string()
        .required("Enter the address"),
    contactno: yup
        .number()
        .required("Contact number should not be empty")
        .min(10, "Enter the valid contact number"),
    religion: yup
        .string()
        .required("Religion  should not be empty ")
})

// adding new student function component
export function Addstudent() {

    const authtoken = localStorage.getItem("token");
    const authemail = localStorage.getItem("emailid");

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { name: "", lastname: "", dob: "", emailid: "", address: "", contactno: "", religion: "" },
        validationSchema: formValidation,
        onSubmit: (data) => addstudentReq(data)
    })
    const history = useHistory();
    const { id } = useParams();

    // req for add students
    const addstudentReq = (value) => {

        const auth = {
            email: authemail,
            token: authtoken,
            id
        }
        axios({ url: `${apiurl}/addstudent/newstudent`, method: "POST", headers: auth, data: value })
            .then((response) => {
                try {
                    if (response.status === 200) {
                        history.push(`/classdetails/${id}`)
                    }
                } catch (error) {
                    console.log(error)
                }
            })
    }
    return (
        <div classname="add-student-main-container">
            <Card classname="add-student-card">
                <Card.Body >
                    <Form onSubmit={handleSubmit} className="add-student-form">

                        {/* Name field */}
                        <Form.Group className="add-student-name-part" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <input
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                type="text"
                                placeholder="Enter name"
                            />
                            {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                        </Form.Group>

                        {/* date of birth field */}
                        <Form.Group className="add-student-dob-part" controlId="formBasicEmail">
                            <Form.Label>Date of birth</Form.Label>
                            <input
                                name="dob"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dob}
                                type="date"
                                placeholder="Enter date of birth "
                            />
                            {errors.dob && touched.dob ? (<div>{errors.dob}</div>) : null}
                        </Form.Group>

                        {/* email id field */}
                        <Form.Group className="add-student-email-part" controlId="formBasicEmail">
                            <Form.Label>Email id</Form.Label>
                            <input
                                name="emailid"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.emailid}
                                type="emailid"
                                placeholder="Enter emailid"
                            />
                            {errors.emailid && touched.emailid ? (<div>{errors.emailid}</div>) : null}
                        </Form.Group>

                        {/* address field */}
                        <Form.Group className="add-student-address-part" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <input
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                type="text"
                                placeholder="Enter address(Full address) "
                            />
                            {errors.address && touched.address ? (<div>{errors.address}</div>) : null}
                        </Form.Group>

                        {/* contact number field */}
                        <Form.Group className="add-student-contactno-part" controlId="formBasicEmail">
                            <Form.Label>Contact number</Form.Label>
                            <input
                                name="contactno"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contactno}
                                type="text"
                                placeholder="Enter contact number "
                            />
                            {errors.contactno && touched.contactno ? (<div>{errors.contactno}</div>) : null}
                        </Form.Group>

                        {/* religion field */}
                        <Form.Group className="add-student-religion-part" controlId="formBasicEmail">
                            <Form.Label>Religion</Form.Label>
                            <input
                                name="religion"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.religion}
                                type="text"
                                placeholder="Enter religion"
                            />
                            {errors.religion && touched.religion ? (<div>{errors.religion}</div>) : null}
                        </Form.Group>

                        <Button className="add-student-btn" variant="primary" type="submit">
                            Add
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}