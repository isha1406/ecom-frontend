import React, { useEffect, useState } from 'react'
import { deleteitem, loadCart } from './Service/CartService';
import {Col,Container,Row,Table,Button,NavLink} from 'reactstrap'
import Base from './Base';
import { setcartItems, getCartItems, getCurrentUser, setOrderlocal, getOrderlocal } from './Auth';
import { toast } from 'react-toastify';
import './Home.scss'
import { createOrder } from'./Service/OrderService';
import { Link } from 'react-router-dom';

function Cart() {

    const[cat,setCat]=useState({
      cartId:'',
      items:[
        {
          cartItemId:'',
          quantity:'',
          product:{
            productId:'',
          }
        }
      ],
     
    });

    const user=getCurrentUser().email;

    useEffect(()=>{  
    loadCart(user).then(data=>{
      setCat(data);
      setcartItems(data);
      console.log(cat);
    }).catch(error=>{
      console.log(error);
    })    
   },[])


  const onRemove=(productid)=>{
       deleteitem(productid,user).then(data=>{
        console.log(data);       
       // setCat(cat.items.filter(item=>item.items.cartItemId !== cartItemId));
       // setCat((prevItems) =>
       // prevItems.filter((items) => items.cartItemId !== cartItemId)
       // )
       
       /*setCat(
        cat.items.filter((each) => {
           return each.product.productId !== productid;
        }))
       */

        loadCart(user).then(data=>{
          setCat(data);
          setcartItems(data);
          console.log(cat);
        }).catch(error=>{
          console.log(error);
        })    
        toast.success("Item Removed from Cart");
        
     }).catch(error=>{
       console.log(error);
       toast.error("Error");
     })
      
  }

  const em=getCurrentUser();


  const catitems=getCartItems().cartId;
  const[od,setOd]=useState({
    cartId: catitems,
    orderAddress:em.address
  })

  /*const[oi,setoi]=useState({
    orderId:''
  })
  */
  const placed=()=>{
    if(cat.items.length<=0)
    {
      toast.error("You cart is empty");
      return;
    }
    createOrder(em.email,od).then(data=>{
     console.log(od);
     setOrderlocal(data);
     //setoi(data.orderId);
     toast.success("Order Created");
     console.log(data);     
    }).catch((error)=>{
      toast.error("Error");
     console.log(error);
    })

 }

 const orderid=getOrderlocal().orderId;

 if(cat.items==null){
  return(
    <Base>
    <div className='home'>
      <Container className='text-center mt-5'>
      <Row className='mt-5'>
        <Col className='mt-5'md={{size:8,offset:2}}>
        <h5>Your Cart is EMPTY!!</h5>
        <p>Add products to shop</p>
        </Col>
      </Row>
      </Container>     
    </div>
    </Base>
  )
 }


 else if(cat.items.length<=0){
  return(
    <Base>
    <div className='home'>
      <Container className='text-center mt-5'>
      <Row className='mt-5'>
        <Col className='mt-5'md={{size:8,offset:2}}>
        <h5>Your Cart is EMPTY!!</h5>
        <p>Add products to shop</p>
        </Col>
      </Row>
      </Container>     
    </div>
    </Base>
  )
 }



else{
  return (
    <Base>
    <div className='home'>
    <Container>
          <Row>
              <Col className='mt-5' md={{size:8,offset:2}}>
              <div className='text-center' > 
              <h3>Cart</h3>       
              <br></br>
              <Table>
                  <thead>
                      <tr className='text-center'>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total Price</th>           
                      </tr>
                  </thead>
                  <tbody>

                       {
                            (cat) && (cat.items.map((each,index)=>(
                                <tr key={index} className='text-center'>
                                <td>{each.product.productName}</td>
                                <td>{each.product.productPrize}</td>
                                <td>{each.quantity}</td>
                                <td>{each.totalprice}</td>
                                <td><Button onClick={()=>onRemove(each.product.productId)}>Remove</Button></td>                             
                                </tr>
                            ))
                            )
                       }                  
                  </tbody>
                  
              </Table>
              <NavLink tag={Link} to={'/orderplaced/'+orderid} onClick={placed} ><h4>Place Order</h4></NavLink>
             </div>  
          </Col>
          </Row>
        </Container>
      </div>
    </Base>
  )
                                  

}
}

export default Cart



