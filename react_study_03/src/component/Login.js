import React from 'react';
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
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs'

function Login() {

  const navigate = useNavigate();

  const axiosConfig = {
    heardrs:{
      "Content-Type": "applicaion/x-www-form-urlencoded"
    }
  }

  const [input , setInput] = useState({
    username: '',
    password: ''
  })

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInput({
      ...input,
      [id]: value,
    })
  }

  const login = () => {
    axios.post("/api/login" , qs.stringify(input) , axiosConfig)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    navigate("/")
  }

    return (
        <MDBContainer fluid>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
    
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
    
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='username' type='email' size="lg" onChange={onChange}/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password' type='password' size="lg" onChange={onChange}/>
    
                  {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
                  <MDBBtn outline className='mx-2 px-5' color='white'  style={{backgroundColor: 'gray'}} onClick={login}>
                    Login
                  </MDBBtn>

    
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </div>
    
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Sign Up</a></p>
    
                  </div>
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
      );

}

export default Login;