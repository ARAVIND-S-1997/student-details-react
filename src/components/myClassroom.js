import axios from "axios"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { apiurl } from "../apiLink"
import { authemail, authtoken } from "../authData"
import Button from 'react-bootstrap/Button';

export function Myclassroom() {
    const [classroom, setclassroom] = useState([]);
    // const[open,setopen]=useState("false");
    // console.group(open)

    const dataa=authemail;
    console.log(dataa)
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
                classroom.map(({_id,classname,section}) => (
                    <div className="myclassroom-content-container-one">
                        <img src={require("./images/classroomImage.png")} alt="classroom logo" />
                        <div className="myclassroom-content-container-two">
                            <h6>Class:{classname}</h6>
                            <h6>Section:{section}</h6>
                            <Button onClick={() => { history.push(`/classdetails/${_id}`) }} variant="light" size="sm">open</Button>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}