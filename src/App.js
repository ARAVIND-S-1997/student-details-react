// packages amd libraries imports
import { Route, Switch } from "react-router-dom";

// other file imports
import './App.css';
import { NavBar } from "./components/navBar"
import { Login } from './components/loginComponent';
import { Signup } from './components/signupComponent';
import { Welcomedashboard } from './components/welcomeDashboard';
import { Forgetpassword } from './components/forgetpasswordComponent';
import { Changepassword } from './components/changepasswordComponent';
import { Myclassroom } from "./components/myClassroom";
import { Createclassroom } from "./components/createClassroom";
import { Classdetails } from "./components/classdetailsComponent";
import { Addstudent } from "./components/addStudentComponent";
import { IndividualStudentDetails } from "./components/individualStudentDetailComponent";
import { EditStudentInfo } from "./components/editStudentInfoComponent"
import { Addmarks } from "./components/addMarksComponent";
import { Userdetails } from "./components/userdetailsComponent";
import { Edituserdetails } from "./components/edituserdetailsComponent";

// Root component
function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
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
          <Welcomedashboard />
        </Route>
        <Route exact path="/myclassroom">
          <Myclassroom />
        </Route>
        <Route exact path="/createclassroom">
          <Createclassroom />
        </Route>
        <Route exact path="/classdetails/:id">
          <Classdetails />
        </Route>
        <Route exact path="/addstudent/:id">
          <Addstudent />
        </Route>
        <Route exact path="/studentinfo/:id">
          <IndividualStudentDetails />
        </Route>
        <Route exact path="/editstudent/:id">
          <EditStudentInfo />
        </Route>
        <Route exact path="/addmarks/:id">
          <Addmarks />
        </Route>
        <Route exact path="/userdetails">
          <Userdetails />
        </Route>
        <Route exact path="/edituserdetails/:id">
          <Edituserdetails />
        </Route>
      </Switch>
    </>

  );
}

export default App;
