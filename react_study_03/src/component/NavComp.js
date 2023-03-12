import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState , useEffect } from 'react';
import axios from 'axios';

function NavComp(){

  const [ch , setch] = useState(false);

  useEffect(() => {
    axios.get('/api/user/name')
    .then(response => setUsername(response.data))
    .catch(error => console.log(error))

    if(username === ""){
      setch(false);
    }
    else{
      setch(true);
    }
  })


  const [username , setUsername] = useState("");


  const logout = () => {
    axios.get('/api/logout')
    .catch(error => console.log(error))
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
              <Nav.Link href="/user">user</Nav.Link>
              <Nav.Link href="/team">team</Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
              {ch ? (
                      <div>
                      <Navbar.Text class="mx-3">
                        Signed in as: {username}
                      </Navbar.Text>
                      <button type="button" onClick={logout}>Logout</button>
                      </div>
                      ):(
                        <Nav.Link href="/login" className='mx-3'>Login</Nav.Link>
                      )
              }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavComp;