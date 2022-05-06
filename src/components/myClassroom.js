// react bootstrap imports
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";

// other packages imports
import axios from "axios"

// other packages imports
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// other file imports
import { apiurl } from "../apiLink"



// my classroom req
export function Myclassroom() {

    const authtoken = localStorage.getItem("token");
    const authemail = localStorage.getItem("emailid");
    const firstname=localStorage.getItem("firstname");
  
    const [classroom, setclassroom] = useState([]);
    console.log("classrooms are:", classroom);

    const history = useHistory();
    const myclassroomReq = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiurl}/home/myclassroom`, method: "GET", headers: auth })
            .then((response) => setclassroom(response.data.getRequest));
    }
    

    // delete classroom req
    const deleteclassroom = (sub) => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiurl}/home/deleteclassroom/${sub}`, method: "POST", headers: auth })
            .then((response) => {
                if (response.status === 200) {
                    setclassroom(response.data);
                }
            })

    }
    
        //eslint-disable-next-line
    useEffect(myclassroomReq, [authtoken,authemail]);
    return (
        <div className="myclassroom-main-container">
            {
                (classroom !== undefined) ? classroom.map(({ _id, classname, year }) => (
                    <div key={_id} className="myclassroom-content-container-one">
                        <img src={require("./images/classroomImage.png")} alt="classroom logo" />
                        <div  className="myclassroom-content-container-two">
                            <h6>Class:{classname}</h6>
                            <h6>Year:{year}</h6>
                            <ButtonGroup>
                                <Button onClick={() => { history.push(`/classdetails/${_id}`) }} variant="light" size="sm">open</Button>
                                <Button onClick={() => deleteclassroom(_id)} variant="light" size="sm">Delete</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                )) : <h1 className="myclassroom-welcome-msg" >Hai welcome {firstname},Create you classrooms</h1>

            }
        </div >
    )
}