import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card,Form,Label,Input, CardBody, Button} from 'reactstrap'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductbyId, updateProductById, uploadImage } from './Service/ProductService';
import './Home.scss'
import Base from './Base';

function EditProduct() {
  
    const navigate=useNavigate();

    const{productId}=useParams();

   /* const [file, setFile] = useState();
    const handleChange=(e)=>{
      console.log(e.target.files);
      setFile(e.target.files[0]);
  }
  */

  const[productById,setProductById]=useState({});
  const[pd,setpd]=useState({
    productId:productId,
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

  useEffect(()=>{
    getProductbyId(productId).then(data=>{
      setProductById(data);
    }).catch(error=>{
      console.log(error);
    })
  },[])

    
    const onFormSubmit=(event)=>{ 
      /*event.preventDefault();

      const formData=new FormData()
      formData.append('product_image',file)
  
      if(file==null)
      {
        toast.error("upload Image");
        return;
      }
       uploadImage(productId,formData).then((data)=>{
        toast.success("imguploaded");
        console.log(data);
       }).catch((error)=>{
        toast.error("ImgError");
        console.log(error);
       })
       */

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
        
       console.log(pd);
       updateProductById(productId,pd).then((data)=>{       
        toast.success("Product Updated");
        navigate("/store");
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
        <Row className='mt-3'>
        <Col md={{size:4,offset:4}}>
        <Card className color='light'>
          <h3 className='text-center mt-4'>Edit Product Details</h3>
          <CardBody>
          <Form>
            <div className='m-3'>
              {/* <div>
             <Label id='img' for="imgname">Upload Image</Label>
             <Input type="file" id="file-input" name="ImageStyle" onChange={handleChange}></Input>
             <img src={file} />
             </div>
             */}
              <hr></hr>
              <div className='m-3'>
             <Label id='name' for="name">Product Name</Label>
             <Input 
              onChange={(event)=>onFieldChange(event,'productName')} 
              defaultValue={productById.productName}
              type='text'  
              id='name' 
              placeholder="enter">
              </Input>
             </div>

             <div className='m-3'>
             <Label id='price' for="price">Product Price</Label>
             <Input 
              defaultValue={productById.productPrize}
              onChange={(event)=>onFieldChange(event,'productPrize')} 
              type='text'  
              id='price' 
              placeholder="enter">
              </Input>
             </div>

             <div className='m-3'>
             <Label id='quantity' for="quantity">Product Quantity</Label>
             <Input 
              defaultValue={productById.productQuantity}
              onChange={(event)=>onFieldChange(event,'productQuantity')} 
              type='text'  
              id='qunatity' 
              placeholder="enter">
              </Input>
             </div>

             <div className='m-3'>
             <Label id='desc' for="desc">Product Description</Label>
             <Input 
              defaultValue={productById.productDesc}
              onChange={(event)=>onFieldChange(event,'productDesc')} 
              type='text'  
              id='desc' 
              placeholder="enter">
              </Input>
             </div>

             <div className='m-3 text-center'>
              <Button size='sm' color='success' onClick={onFormSubmit}>Update</Button>
            
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

export default EditProduct;
