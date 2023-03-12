import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function Register() {

    const [user , setUser] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();


    const register = () => {
        axios.post("/api/register" , user)
        .then((response) => console.log(response.data))
        .catch(error => console.log(error))

        console.log(user.username);

        return navigate("/");
    }

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setUser({
            ...user,
            [id]: value,
        });
    }

    return (
        <MDBContainer fluid>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
    
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">Please enter your new ID and Password</p>
    
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='username' type='text' size="lg" onChange={onChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password' type='password' size="lg" onChange={onChange}/>
    
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' style={{backgroundColor: 'gray'}} onClick={() => {
                    register();
                  }}>
                    Register
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
      );
}

export default Register;