import React, { useState } from 'react'
import { Container,Row,Col,Card, CardBody, Label,Form,Input,Button } from 'reactstrap'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { UpdateCategoryById } from './Service/CategoryService';
import './Home.scss'
import Base from './Base';

function UpdateCatagory(){
   

    const{categoryId}=useParams();

    const navigate=useNavigate();

    const[catDetails,setCatDetails]=useState({
      categoryId:categoryId,
      title:''
    });
    

    
    const onFieldChange=(event,fieldName)=>{
      //console.log(event.target.value)
      setCatDetails({...catDetails,[fieldName]:event.target.value})
    }
    
    
  
    const onFormSubmit=(event)=>{ 
      event.preventDefault();
      console.log(catDetails);
       if(catDetails.title.trim()==='')
       {
        toast.error("New title is required");
        return;
       }

       UpdateCategoryById(categoryId,catDetails).then((data)=>{

        
        toast.success("Category Updated");
        navigate("/viewcat");
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
      <Row>
          <Col md={{size:4,offset:4}}>
          <Card className='shadow-sm mt-5' color='light'>
              <h4 className='text-center mt-2'>Update Category</h4>
              <CardBody>
                  <Form>
                  <div className='m-3'>
                  <Label id='categoryId' for="categoryId"><b>CategoryId : {categoryId}</b></Label>      
                  <br></br>
                  <Label id='title' for="title"><b>New Title</b></Label>
                  <Input 
              onChange={(event)=>onFieldChange(event,'title')} 
              type='text'  
              id='title' 
              placeholder='Enter New Title' 
              value={catDetails.title}>
              </Input>     
                        </div>

                        <div className='m-3 text-center'>
              <Button size='sm' color='success' onClick={onFormSubmit}>Update</Button>
            
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

export default UpdateCatagory
