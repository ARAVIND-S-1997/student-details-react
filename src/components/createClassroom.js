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
    section: yup.string().required("Section can't be empty")
})

// create classroom component

export function Createclassroom() {

    const history=useHistory();
    console.log(history)

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: { classname: "", section: "" },
        validationSchema: createClassnameSchema,
        onSubmit: (data) => createclassroomReq(data)
    })

    // api request
    const createclassroomReq = (value) => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiurl}/home/createclassroom`, method: "POST", headers: auth, data: value })
        .then((response)=>{
            if(response.status===200){
                history.push("/myclassroom");
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
                                placeholder="Ex:Second grade"
                            />
                            {errors.classname && touched.classname ? (<div>{errors.classname}</div>) : null}
                        </Form.Group>

                        {/* section field */}
                        <Form.Group className="create-section-part" controlId="formBasicEmail">
                            <Form.Label> Section</Form.Label>
                            <input
                                name="section"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.section}
                                type="text"
                                placeholder="Ex:A or B etc"
                            />
                            {errors.section && touched.section ? (<div>{errors.section}</div>) : null}
                        </Form.Group>
                        <Button className="changepassword-form-button" variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}