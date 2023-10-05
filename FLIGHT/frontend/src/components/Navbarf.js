import React from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar} from 'react-bootstrap';
import {NavDropdown,Nav} from 'react-bootstrap';
import { logout } from '../actions/useractions';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import img from '../cimages/brand_img.png'
const Navbarf = () => {
  const userLogin=useSelector((state)=>state.userLogin)
  const{userInfo}=userLogin
  const dispatch=useDispatch();
  function logouthandler(){
    dispatch(logout())
    }
  return (
    <Navbar expand="lg" style={{backgroundColor:'black'}} collapseOnSelect>
    <Container>
      <Link to='/' style={{textDecoration:'none'}}>
        <img src={img} height={'30px'} alt=''></img>{" "}
        <Navbar.Brand  style={{color:'white'}}>EaseMyTrip</Navbar.Brand>
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow:'revert'}}>
        <Nav className="justify-content-end">
          <Link to="/"  className="nav-link" style={{color:'white'}}>Book Ticket</Link>
          {userInfo?(<>
                 
                 <NavDropdown title={<span style={{userSelect:"none",color:'white'}}>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="20"
                   height="20"
                   fill="white"
                   class="bi bi-person-fill"
                   viewBox="0 2 16 16"
                 >
                   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                 </svg>{" "}
                   {userInfo.name}</span>} id="username"><NavDropdown.Item>
                  <Link style={{textDecoration:"none",color:'black'}}  to='/profile' className="nav-link" data-toggle="collapse"
           data-target="#navbarNav">Profile</Link></NavDropdown.Item>
                   
                   <NavDropdown.Item onClick={logouthandler} data-toggle="collapse"
           data-target="#navbarNav"><Link to="/" className="nav-link" style={{textDecoration:"none",'color':'black'}}>Logout</Link></NavDropdown.Item>
                 </NavDropdown>
                 </>):(<Link className="nav-link" to="/login" data-toggle="collapse"
               data-target="#navbarNav">
               <span>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="20"
                   height="20"
                   fill="white"
                   class="bi bi-person-fill"
                   viewBox="0 0 16 16"
                 >
                   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                 </svg>{" "}
                 <span style={{color:'white'}}>Login</span>
               </span>
            </Link>)}
          <Link to="/contactus"  className="nav-link"  style={{color:'white'}}>Contact Us</Link>
          <Link to="/faqs"  className="nav-link"  style={{color:'white'}}>FAQ's</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarf