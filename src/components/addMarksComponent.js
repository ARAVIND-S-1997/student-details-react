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
import { useParams } from 'react-router-dom';

// other file imports
import { apiurl } from '../apiLink.js';
import { authemail, authtoken } from '../authData.js';

const formValidation = yup.object({
    month: yup.string().required("Month should not be empty"),
    tamil: yup.number().required("Only number should entered"),
    english: yup.number().required("Only number should entered"),
    maths: yup.number().required("Only number should entered"),
    science: yup.number().required("Only number should entered"),
    social: yup.number().required("Only number should entered"),
    total: yup.number().required("Only number should entered"),
})

export function Addmarks() {
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: { month: "", tamil: "", english: "", maths: "", science: "", social: "", total: "" },
        validationSchema: formValidation,
        onSubmit: (data) => addmarksReq(data)
    });
    const history = useHistory();
    const { id } = useParams();

    const addmarksReq = (dataa) => {
        const auth = {
            token: authtoken,
            email: authemail
        }
        axios({ url: `${apiurl}/addstudent/addmarks/${id}`, method: "POST", headers: auth, data: dataa })
            .then((response) => {
                if (response.status === 200) {
                    history.push(`/studentinfo/${id}`);
                }
            })
    }

    return (
        <div className="">
            <Card classname="">
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="">

                        <Form.Group className="" controlId="formBasicMonth">

                            <Form.Label>Month</Form.Label>
                            <input
                                name="month"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.month}
                                type="text"
                                placeholder="Enter the month"
                            />
                            {errors.month && touched.month ? (<div>{errors.month}</div>) : null}
                        </Form.Group>


                        <Form.Group className="" controlId="formBasicEmail">

                            <Form.Label>Tamil</Form.Label>
                            <input
                                name="tamil"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tamil}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.tamil && touched.tamil ? (<div>{errors.tamil}</div>) : null}
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>English</Form.Label>
                            <input
                                name="english"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.english}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.english && touched.english ? (<div>{errors.english}</div>) : null}
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Maths </Form.Label>
                            <input
                                name="maths"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.maths}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.maths && touched.maths ? (<div>{errors.maths}</div>) : null}
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Science</Form.Label>
                            <input
                                name="science"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.science}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.science && touched.science ? (<div>{errors.science}</div>) : null}
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Social</Form.Label>
                            <input
                                name="social"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.social}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.social && touched.social ? (<div>{errors.social}</div>) : null}
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Total</Form.Label>
                            <input
                                name="total"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.total}
                                type="text"
                                placeholder="Enter the marks"
                            />
                            {errors.total && touched.total ? (<div>{errors.total}</div>) : null}
                        </Form.Group>

                        <Button className="" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}