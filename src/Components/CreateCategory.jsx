import React, { useState } from 'react'
import { Container,Row,Col,Card, CardBody, Label,Form,Input,Button } from 'reactstrap'
import { toast } from 'react-toastify';
import { createCategory } from './Service/CategoryService';
import { useNavigate } from 'react-router-dom';
import './Home.scss'
import Base from './Base';

function CreateCategory() {

    const navigate=useNavigate();

    const[title,setTitle]=useState({
      title:''
    });

    const onFieldChange=(event,fieldName)=>{
      //console.log(event.target.value)
      setTitle({...title,[fieldName]:event.target.value})
    }
   

    const reset=()=>{
        setTitle({
          title:''
        });
      }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(title.title.trim()==='')
        {
            toast.error("Title is required");
            return;
        }

        createCategory(title).then((data)=>{
          toast.success("Title Registered")
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
                <h4 className='text-center mt-2'>Create Category</h4>
                <CardBody>
                    <Form onSubmit={onFormSubmit}>
                    <div className='m-3'>
                    <Label id='title' for="title">Title</Label>
                            <Input value={title.title}
                   onChange={(event)=>onFieldChange(event,'title')}
                    type='text'  
                    id='title' 
                    placeholder='Enter Category Title'>
                    </Input>                        
                        </div>

                        <div className='m-3 text-center'>
              <Button size='sm' color='success'>Create</Button>
              <Button onClick={reset} style={{marginLeft:'50px'}} size='sm' color='primary'>Reset</Button>
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

export default CreateCategory
