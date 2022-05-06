// // react bootstrap imports
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button';

// import { useHistory } from 'react-router-dom';
// import { useState, useEffect } from "react";

// // navbar function component
// export function NavBar({value,changevalue}) {

//     const authtoken = localStorage.getItem("token");
//     const firstname = localStorage.getItem("firstname");
//     const lastname = localStorage.getItem("lastname");
   
//     const [token, settoken] = useState(authtoken);
//     console.log(token)
//     console.log(authtoken)

//     useEffect(() => {
//         if (authtoken) {
//             settoken(authtoken)
//         } else {
//             settoken("No token")
//         }
//     }, [authtoken,settoken,value])

//     const history = useHistory()
//     return (
//         <div>
//             {/* nav bar container */}
//             {(token) ?
//                 <Navbar className="navbar">
//                     <Container>
//                         <Navbar.Brand href="/welcomedashboard" >Student details </Navbar.Brand>
//                         <Navbar.Toggle />
//                         <Navbar.Collapse className="justify-content-end">
//                             <div className='nav-bar-btn-comb'>
//                                 <Navbar.Text>
//                                     Signed in as: <a href="/userdetails">{firstname} {lastname}</a>
//                                 </Navbar.Text>
//                                 <Button className='logout-btn'
//                                     onClick={() => {
//                                         localStorage.clear();
//                                         history.push("/login")
//                                     }} variant="secondary">Logout</Button>
//                             </div>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar> :
//                 <Navbar className="navbar">
//                     <Container>
//                         <Navbar.Brand >Student details </Navbar.Brand>
//                     </Container>
//                 </Navbar>}
//         </div>
//     )
// }