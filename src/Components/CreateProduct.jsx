import React, { useState } from 'react'
import { Container, Row, Col, Card,Form,Label,Input, CardBody, Button} from 'reactstrap'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct} from './Service/ProductService';
import './Home.scss'
import Base from './Base';

function CreateProduct() {

  const navigate=useNavigate();

  const{categoryId}=useParams();

  const[pd,setpd]=useState({
    productName:'',
    productPrize:'',
    productQuantity:'',
    productDesc:'',
    productImageName:''
  });

  const onFieldChange=(event,fieldName)=>{
    //console.log(event.target.value)
    setpd({...pd,[fieldName]:event.target.value})
  }


  const onFormSubmit=(event)=>{ 
    event.preventDefault();

     if(pd.productName.trim()==='')
     {
      toast.error("Product Name is required");
      return;
     }

     if(pd.productPrize.trim()==='')
     {
      toast.error("Price is required");
      return;
     }

     if(pd.productQuantity.trim()==='')
     {
      toast.error("Quantity is required");
      return;
     }

     if(pd.productDesc.trim()==='')
     {
      toast.error("New title is required");
      return;
     }

      createProduct(categoryId,pd).then((data)=>{       
      toast.success("Product Created");
      navigate('/store');
      console.log(data);     
     }).catch((error)=>{
       toast.error("Error");
      console.log(error);
     })
    

 }

  return (
    <Base>
    <div className='home'>
    <Container>
    <Row className='mt-5'>
    <Col md={{size:4,offset:4}}>
    <Card className='mt-5' color='light'>
      <h3 className='text-center mt-2'>Create Product</h3>
      <CardBody>
      <Form>
        <div className='m-3'>
          <div className='m-3'>
         <Label id='name' for="name">Product Name</Label>
         <Input 
          onChange={(event)=>onFieldChange(event,'productName')} 
          type='text'  
          id='name' 
          placeholder="Enter Product Name">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='price' for="price">Product Price</Label>
         <Input 
          onChange={(event)=>onFieldChange(event,'productPrize')} 
          type='text'  
          id='price' 
          placeholder="Enter Product Price">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='quantity' for="quantity">Product Quantity</Label>
         <Input
          onChange={(event)=>onFieldChange(event,'productQuantity')} 
          type='text'  
          id='qunatity' 
          placeholder="Enter Product Quantity">
          </Input>
         </div>

         <div className='m-3'>
         <Label id='desc' for="desc">Product Description</Label>
         <Input 
          onChange={(event)=>onFieldChange(event,'productDesc')} 
          type='text'  
          id='desc' 
          placeholder="Enter Product Description">
          </Input>
         </div>

         <div className='m-3 text-center'>
          <Button size='sm' color='success' onClick={onFormSubmit}>Create</Button>
        
         </div>

        
        </div>
         </Form>
         </CardBody>
         </Card>
         </Col>
         </Row>
         </Container>
</div>
</Base>
  )
}

export default CreateProduct
