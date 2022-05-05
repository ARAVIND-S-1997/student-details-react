// react bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// other packages imports
import * as yup from 'yup';
import axios from 'axios';

// hooks imports
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

// other file imports
import { apiurl } from '../apiLink';
import { authemail, authtoken } from '../authData';


// schema for creating classroom
const createClassnameSchema = yup.object({
    classname: yup.string().required("Classname can't be empty "),
    year: yup.number().required("Year can't be empty")
})

// create classroom component
export function Createclassroom() {

    const history = useHistory();

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: { classname: "", year: "" },
        validationSchema: createClassnameSchema,
        onSubmit: (data) => createclassroomReq(data)
    })
console.log(values)

    // api request
    const createclassroomReq = (value) => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiurl}/home/createclassroom`, method: "POST", headers: auth, data: value })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/welcomedashboard");
                }
            })
    }

    return (

        <div classname="create-classroom-main-div">

            <Card classname="create-classroom-form-card">
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="create-classroom-form">

                        {/* classname field */}
                        <Form.Group className="create-classname-part" controlId="formBasicText">
                            <Form.Label>Classname</Form.Label>
                            <input
                                name="classname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.classname}
                                type="text"
                                placeholder="Ex:Second grade A"
                            />
                            {errors.classname && touched.classname ? (<div>{errors.classname}</div>) : null}
                        </Form.Group>

                        {/* year field */}
                        <Form.Group className="create-year-part" controlId="formBasicText">
                            <Form.Label> Year</Form.Label>
                            <input
                                name="year"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.year}
                                type="text"
                                placeholder="Enter the year"
                            />
                            {errors.year && touched.year ? (<div>{errors.year}</div>) : null}
                        </Form.Group>
                        <Button className="changepassword-form-button" variant="primary" type="submit">
                            Create classroom
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}