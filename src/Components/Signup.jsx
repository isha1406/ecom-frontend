import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Container ,Row, Col, Card, Label,Input, CardBody, CardHeader, CardFooter, Button,Form} from 'reactstrap'
import { createUser } from './Service/UserService';
import Base from './Base';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate=useNavigate();

  const[user,setUser]=useState({
    name:'',
    email:'',
    phone:'',
    gender:'',
    address:'',
    about:'',
    password:''

  });

 const onFieldChange=(event,fieldName)=>{
   //console.log(event.target.value)
   setUser({...user,[fieldName]:event.target.value})
 }

 //const onFieldChangeEmail=(event)=>{
 // console.log(event.target.value)
 // SetEmail({...user,email:event.target.value})
//}

 const registeredUser=(event)=>{
  event.preventDefault();
 // console.log("Submit Button Click");
 if(user.name.trim()===''){
  toast.error("Name is required");
  return;
 }

 if(user.email.trim()===''){
  toast.error("Email is required");
  return;
 }
 
 if(user.phone.trim()===''){
  toast.error("Phone number is required(10 digits)");
  return;
 }

 if(user.gender.trim()===''){
  alert("Gender is required");
  return;
 }

 if(user.address.trim()===''){
  alert("Address is required");
  return;
 }

 if(user.password.trim()===''){
  alert("Password is required");
  return;
 }

 if(user.about.trim()===''){
  alert("About is required");
  return;
 }


 createUser(user).then((data)=>{
  
  if(data==="User already exists"){
    toast.error("User already exists");
    return;
  }

  toast.success("User Registered");
  navigate("/login");
  console.log(data);

 }).catch((error)=>{
   toast.error("Error");
  console.log(error);
 })



}

 const reset=()=>{
  //console.log("Reset Button")
  setUser({
    name:'',
    email:'',
    phone:'',
    gender:'',
    address:'',
    about:'',
    password:''
  });
 }

  return (
    <Base>
    <Container>
        <Row>
            <Col md={{size:6,offset:3}}>
                <Card className='shadow-sm mt-3' color='light' style={{marginLeft:145}}>
                   <CardHeader>
                   <h3 className='text-center'>SignUp</h3>
                   </CardHeader>
                   <CardBody>
          
                   <Form onSubmit={registeredUser}>
                    <div>
                    <div className='my-3'>
                      <Label for="name">Name</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.name} onChange={(event)=>onFieldChange(event,'name')} type="text" id="name" placeholder='Enter Your Name'></Input>
                      {user.name ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Name is required</span>}
                      </div>
                      <div className='my-3'>
                      <Label for="username">Email</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.email} onChange={(event)=>onFieldChange(event,'email')} type="text" id='email' name='username' placeholder='jone@123'></Input>
                      {user.email ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Email is required</span>}
                    </div>

                    <div className='my-3'>
                        <Label for="password">Password</Label><b><Label style={{color:"red"}}>*</Label></b>
                        <Input value={user.password} onChange={(event)=>onFieldChange(event,'password')} type="password" id='password' placeholder='Enter your password Here!'></Input>
                        {user.password ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Password is required</span>}
                    </div>

                    <div className='my-3'>
                      <Label for="address">Address</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.address} onChange={(event)=>onFieldChange(event,'address')}  type="textarea"  id='address' placeholder='Enter your Address'></Input>
                      {user.address ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Address is required</span>}
                    </div>

                    <div className='my-3'>
                      <Label for="about">About</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.about} onChange={(event)=>onFieldChange(event,'about')}  type="text" id='about' placeholder='Enter about yourself'></Input>
                    </div>

                    <div className='my-3'>
                      <Label for="gender">Gender</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.gender} onChange={(event)=>onFieldChange(event,'gender')} type="select" id='gender'>
            
                      <option>Male</option>
                      <option>FeMale</option>
                      </Input>
                      {user.gender ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Gender is required</span>}
                    </div>

                    <div className='my-3'>
                      <Label for="phone">Phone Number</Label><b><Label style={{color:"red"}}>*</Label></b>
                      <Input value={user.phone} onChange={(event)=>onFieldChange(event,'phone')}  type="text" id='phone' placeholder='Enter your Phone Number'></Input>
                      {user.phone ?"" :<span style={{color:"red",marginLeft:"5px",marginTop:'4px' }} className='text-center'>Phone Number is required</span>}
                    </div>
                     
                    <CardFooter>
                    <div>
                        <Button block color='success'>
                            signup
                        </Button>
                    </div>

                    <div className='my-3'>
                        <Button onClick={reset} block color='warning'>
                            Reset
                        </Button>
                    </div>

                   </CardFooter>

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

export default Signup
