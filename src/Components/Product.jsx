import React, { useEffect, useState } from 'react'
import { CardBody,Row,Col,Card, CardText, Container, Button} from 'reactstrap'
import {BASE_URL} from '../Components/Service/AxiosHelper'
import { Link } from 'react-router-dom'
import { addtocart } from './Service/CartService'
import { checkLogin, getCurrentUser,getUserRole} from './Auth';
import { toast } from 'react-toastify'

function Product({ product}) {

  const[add,setAdd]=useState({
    productId:'',
    quantity:1
  })

  const[quantity,setQuantity]=useState(1);

  const user=getCurrentUser().email;
  

  useEffect(()=>{

    addtocart(user,add).then(data =>{
    }).catch(error=>{
      console.log(error)
    });
  })

  const additem=(message)=>{

    if(!checkLogin())
    {
      toast.error("User not logged in");
      return;
    }  

    console.log(message);
    setAdd({
     productId:message,
     quantity:quantity
    })   

    toast.success("Product added to Cart");
   
  }


  const inquantity=(q)=>{
    if(!checkLogin())
    { 
      toast.error("User not logged in");
      return; 
    }
    setQuantity(q+1);
}

 const dequantity=(q)=>{   
  if(!checkLogin())
  { 
    toast.error("User not logged in");
    return; 
  }  

    if(q>1)
    setQuantity(q-1);
 }


  return (
    <div>
      <Row>
        <Col>
        <Card className='m-3'>
            <img style={{height:'150px', width:'100%',margin:'2px 0px',objectFit:'contain'}} src={BASE_URL+'/product/images/'+product.productId}  alt='loading...'></img>
            <CardBody>
                <h5>{product.productName} {/*<span>Id:{product.productId}</span>*/}</h5>
                {product.productDesc.slice(0,30)}
                <CardText><b>Category : {product.category.title}</b></CardText>
                <span>Price :</span>
                    <span style={{fontSize:'20px',marginLeft:'3px',fontWeight:'bold',color:'red'}}>₹</span>
                   <span style={{fontSize:"16px",marginLeft:"3px",fontWeight:'bold'}}>{product.productPrize}</span>
                    {/*<span style={{fontSize:'20px',marginLeft:'3px',fontWeight:'bold',color:'red'}}>₹</span>
                    /*<span style={{fontSize:'20px',fontWeight:'bold'}}>{Math.round(product.productPrize - product.productPrize*10/100)}</span>*/}
                    
                    <Container style={{display:'flex',textAlgin:'center'}}>
                    { (getUserRole()!="ADMIN") && (<>

                        <Button color='primary' size='sm' className='m-2' onClick={()=>additem(product.productId)}>Buy</Button>    
                        <Button color='info' className='m-2' onClick={()=>inquantity(quantity)}>+</Button> <h5 className='mt-2'> Qty:[{quantity}] </h5><Button className='m-2' onClick={()=>dequantity(quantity)} color='info'> - </Button>
                     </>)
                    }
                       { (getUserRole()=="ADMIN") && (<>
                        <Button color='info' size='sm' className='m-2' tag={Link} to={'/editproduct/'+product.productId}>Edit Product Details</Button>
                        <Button color='info' size='sm' className='m-2' tag={Link} to={'/editimage/'+product.productId}>Edit Product Image</Button>
                        </>)}

                    </Container>
            </CardBody>
        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Product
