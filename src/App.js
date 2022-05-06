// react bootstrap imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

// packages amd libraries imports
import { Route, Switch, Redirect } from "react-router-dom";

// hooks
import { useState } from "react";

// other file imports
import './App.css';
// import { NavBar } from "./components/navBar"
import { Login } from './components/loginComponent';
import { Signup } from './components/signupComponent';
import { Welcomedashboard } from './components/welcomeDashboard';
import { Forgetpassword } from './components/forgetpasswordComponent';
import { Changepassword } from './components/changepasswordComponent';
import { Myclassroom } from "./components/myClassroom";
import { Createclassroom } from "./components/createClassroom";
import { Classdetails } from "./components/classdetailsComponent";
import { IndividualStudentDetails } from "./components/individualStudentDetailComponent";
import { EditStudentInfo } from "./components/editStudentInfoComponent"
import { Addmarks } from "./components/addMarksComponent";
import { Userdetails } from "./components/userdetailsComponent";
import { Edituserdetails } from "./components/edituserdetailsComponent";
import { Addstudent } from './components/addStudentComponent';


// Root component
export default function App() {

  // const authtoken = localStorage.getItem("token");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");

  const [token, settoken] = useState(false);
  console.log(token);

  return (
    <>
      <div>
            {/* Header */}
            {(token===true) ?
                <Navbar className="navbar">
                    <Container>
                        <Navbar.Brand href="/welcomedashboard" >Student details </Navbar.Brand>
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
          <Login settoken={settoken} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/forgetpassword">
          <Forgetpassword />
        </Route>
        <Route exact path="/changepassword/:value">
          <Changepassword />
        </Route>
        <Route exact path="/welcomedashboard">
          {(token === true) ? <Welcomedashboard /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/myclassroom">
          {(token === true) ? <Myclassroom /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/createclassroom">
          {(token === true) ? <Createclassroom /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/classdetails/:id">
          {(token === true) ? <Classdetails /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/addstudent/:id">
          {(token === true) ? <Addstudent /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/studentinfo/:id">
          {(token === true) ? <IndividualStudentDetails /> : <Redirect to="/login" />}
        </Route>
        
        <Route exact path="/editstudent/:id">
          {(token === true) ? <EditStudentInfo /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/addmarks/:id">
          {(token === true) ? <Addmarks /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/userdetails">
          {(token === true) ? <Userdetails /> : <Redirect to="/login" />}

        </Route>
        <Route exact path="/edituserdetails/:id">
          {(token === true) ? <Edituserdetails /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  );
}




