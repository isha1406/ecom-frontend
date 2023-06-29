import React, { useState } from 'react'
import { Container, Row, Col,Label,Input, Button} from 'reactstrap'
import Base from './Base';
import { toast } from 'react-toastify';
import { uploadImage } from './Service/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import './Home.scss'

function EditImage() {

    const navigate=useNavigate();
    const{productId}=useParams();
    const [file, setFile] = useState();

    const done=(e)=>{
        e.preventDefault();
      const formData=new FormData()
      formData.append('product_image',file)
  
      if(file==null)
      {
        toast.error("upload Image");
        return;
      }
       uploadImage(productId,formData).then((data)=>{
        toast.success("imguploaded");
        navigate("/store");
        console.log(data);
       }).catch((error)=>{
        toast.error("ImgError");
        console.log(error);
       })
    }

    const handleChange=(e)=>{
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

  return (
    <Base>
    <div className='home'>   
        <Row className='mt-5'>
            <Col md={{size:4,offset:4}}>
            <Container className='mt-5' >
            <div>
             <Label id='img' for="imgname"><h4>Upload Image</h4></Label>
             <Input type="file" id="file-input" name="ImageStyle" onChange={handleChange}></Input>
             <img src={file} />
             </div>

             <Button onClick={done} color='info'>Upload</Button>
             </Container>
            </Col>
        </Row>
       
    </div>
    </Base>
  )
}

export default EditImage
