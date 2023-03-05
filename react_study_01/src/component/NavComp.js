import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState , useEffect } from 'react';
import axios from 'axios';

function NavComp(){


    const [username , setUsername] = useState("");
    const [userauth , setUserauth] = useState("");

    useEffect(() => {
      axios.get('/api/user')
      .then(response => setUsername(response.data))
      .catch(error => console.log(error))

      // axios.get('api/userauth')
      // .then(response=>setUserauth(response.data))
      // .catch(error=>console.log(error))
  })

  const logout = () =>{
    axios.get('/api/logout')
  }

    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Mkpong</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/board">Board</Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
                <div className='mx-2'>{username}</div>
                <Nav.Link href="/login" className='mx-2'>Login</Nav.Link>
                <Nav.Link href="/" className='mx-2' onClick={function(){
                  logout();
                }}>Logout</Nav.Link>
                <Nav.Link href="/register" className='mx-2'>Register</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavComp;