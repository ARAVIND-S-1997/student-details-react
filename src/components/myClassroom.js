import axios from "axios"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { apiurl } from "../apiLink"
import { authemail, authtoken, firstname } from "../authData"
import Button from 'react-bootstrap/Button';

export function Myclassroom() {
    const [classroom, setclassroom] = useState([]);
    console.log("classrooms are:", classroom);

    const history = useHistory();
    const myclassroomReq = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        console.log(auth)
        axios({ url: `${apiurl}/home/myclassroom`, method: "GET", headers: auth })
            .then((response) => setclassroom(response.data.getRequest));
    }
    useEffect(myclassroomReq, []);
    return (
        <div className="myclassroom-main-container">
            {
                (classroom === null) ?
                    <h1 className="myclassroom-welcome-msg" >Hai welcome {firstname},Create you classrooms</h1> :
                    classroom.map(({ _id, classname, year }) => (
                        <div className="myclassroom-content-container-one">
                            <img src={require("./images/classroomImage.png")} alt="classroom logo" />
                            <div className="myclassroom-content-container-two">
                                <h6>Class:{classname}</h6>
                                <h6>Year:{year}</h6>
                                <Button onClick={() => { history.push(`/classdetails/${_id}`) }} variant="light" size="sm">open</Button>
                            </div>
                        </div>
                    ))
            }
        </div >
    )
}