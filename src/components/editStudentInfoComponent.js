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
import { authtoken } from "../authData"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


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
export function EditStudentInfo() {

    const { id } = useParams();
    console.log("Id is (edit student details)",id)

    const getstudentinfo = () => {
        const auth = {
            token: authtoken
        }
        axios({ url: `${apiurl}/addstudent/getstudent/${id}`, method: "get", headers: auth })
            .then((response) => {
                const finalData = response.data.students;
                console.log("final data is", finalData);
                finalData.map((value) => setstudent(value));
            })
    }

    const [student, setstudent] = useState([]);
    console.log(student.name);

    useEffect(getstudentinfo, [id]);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: { name: student.name, dob: student.dob, emailid: student.emailid, address: student.address, contactno: student.contactno, religion: student.religion },
        enableReinitialize: true,
        validationSchema: formValidation,
        onSubmit: (data) => console.log(data)

    })

//     const UpdateReq=()=>{
// axios({url:""})
//     }

    return (
        <div>
            <Card classname="">
                <Card.Body>


                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Form.Group className="" controlId="formBasicEmail">
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

                    <Button className="" variant="primary" type="submit">
                        Add
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}