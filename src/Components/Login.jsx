import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Card,Form,Label,Input, CardBody, Button} from 'reactstrap'
import { loginUser } from './Service/UserService';
import { toast } from 'react-toastify';
import { login } from './Auth';
import { useNavigate } from 'react-router-dom';
import Base from './Base';

function Login() {

  const navigate=useNavigate();

  const[loginData,setLoginData]=useState({
      username:'',
      password:''
  });


  const setValue=(event,fieldName)=>{
    setLoginData({...loginData,[fieldName]:event.target.value});
  }

  const reset=()=>{
    setLoginData({
      username:'',
      password:''
    });
  }

  const loginFormSubmit=(event)=>{
    event.preventDefault();
    if(loginData.username.trim()==='' && loginData.password.trim()===''){
      toast.error("Username and Password is required");
      return
    }

    loginUser(loginData).then(data=>{

      if(data==="User Not Found"){
        toast.error("Please Enter Valid Email");
        return
      }

      if(data==="Invaild username or password"){
        toast.error("Please Enter Valid Password");
        return;
      }

      login(data,()=>{
        navigate("/user/dashboard");
      })
      
      toast.success("Login Successfull");
      console.log(data);
    }).catch(error => {
      toast.error("Login Error");
      console.log(error);
      
    });

  }

  return (
    <Base>
    <Container>
      <Row className='mt-5'>
        <Col md={{size:4,offset:4}}>
        <Card className='shadow-lg mt-5' color='light'>
          <h3 className='text-center mt-2'>Login</h3>
          <CardBody>
          <Form onSubmit={loginFormSubmit}>
            <div className='m-3'>
             <Label id='name' for="username">Username</Label>
             <Input value={loginData.username}
              onChange={(event)=>setValue(event,'username')}
              type='text'  
              id='username' 
              placeholder='Enter Username'>
              </Input>
             </div>

             <div className='m-3'>
             <Label id='psd' for="password">Password</Label>
             <Input value={loginData.password}
              onChange={(event)=>setValue(event,'password')}
             type='password' id='password' placeholder='Enter password'></Input>
             </div>

             <div className='m-3 text-center'>
              <Button size='sm' color='success'>Login</Button>
              <Button onClick={reset} style={{marginLeft:'50px'}} size='sm' color='primary'>Reset</Button>
             </div>

          </Form>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
    </Base>
  )
}

export default Login
