// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

// packages amd libraries imports
import { Route, Switch, Redirect } from "react-router-dom";

// hooks
import { useState } from "react";

// other file imports
import "../styles/appComp.css"
// import { NavBar } from "./components/navBar"
import { Login } from './loginComponent';
import { Signup } from './signupComponent';
import { Welcomedashboard } from './welcomeDashboard';
import { Forgetpassword } from './forgetpasswordComponent';
import { Changepassword } from './changepasswordComponent';
import { Myclassroom } from "./myClassroom";
import { Createclassroom } from "./createClassroom";
import { Classdetails } from "./classdetailsComponent";
import { IndividualStudentDetails } from "./individualStudentDetailComponent";
import { EditStudentInfo } from "./editStudentInfoComponent"
import { Addmarks } from "./addMarksComponent";
import { Userdetails } from "./userdetailsComponent";
import { Edituserdetails } from "./edituserdetailsComponent";
import { Addstudent } from './addStudentComponent';


// Root component
export default function App() {

  // const authtoken = localStorage.getItem("token");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const authtoken = localStorage.getItem("token");

  const [token, settoken] = useState(false);
  console.log(token);

  const[loginalert,setloginalert]=useState();
  console.log(loginalert)



  return (
    <>
      <div className='root'>
            {/* Header */}
            {(token===true||authtoken!==null) ?
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand className="app-title" href="/welcomedashboard" >MyClassroom </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className='nav-bar-btn-comb'>
                                <Navbar.Text>
                                    Signed in as: <a href="/userdetails">{firstname} {lastname}</a>
                                </Navbar.Text>
                                <Button className='logout-btn'
                                    onClick={() => {
                                        localStorage.clear();
                                       settoken(false);
                                    }} variant="secondary">Logout</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> :
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand >Student details </Navbar.Brand>
                    </Container>
                </Navbar>}
        </div>
      <Switch>
        <Route exact path="/">
          <Login  loginalert={loginalert} settoken={settoken} />
        </Route>
        <Route exact path="/signup">
          <Signup setloginalert={setloginalert} />
        </Route>
        <Route exact path="/forgetpassword">
          <Forgetpassword />
        </Route>
        <Route exact path="/changepassword/:value">
          <Changepassword />
        </Route>
        <Route exact path="/welcomedashboard">
          {(token === true||authtoken!==null) ? <Welcomedashboard /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/myclassroom">
          {(token === true||authtoken!==null) ? <Myclassroom /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/createclassroom">
          {(token === true||authtoken!==null) ? <Createclassroom /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/classdetails/:id">
          {(token === true||authtoken!==null) ? <Classdetails /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/addstudent/:id">
          {(token === true||authtoken!==null) ? <Addstudent /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/studentinfo/:id">
          {(token === true||authtoken!==null) ? <IndividualStudentDetails /> : <Redirect to="/" />}
        </Route>
        
        <Route exact path="/editstudent/:id">
          {(token === true||authtoken!==null) ? <EditStudentInfo /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/addmarks/:id">
          {(token === true||authtoken!==null) ? <Addmarks /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/userdetails">
          {(token === true||authtoken!==null) ? <Userdetails /> : <Redirect to="/" />}

        </Route>
        <Route exact path="/edituserdetails/:id">
          {(token === true||authtoken!==null) ? <Edituserdetails /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </>
  );
}




