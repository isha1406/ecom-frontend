import React, { useEffect, useState } from 'react'
import { Row,Col,Container, Button } from 'reactstrap'
import './Home.scss'
import Base from './Base'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderById } from './Service/OrderService'



function OrderPlaced() {

    const {orderId}=useParams();
    const navigate=useNavigate();
    const [order,setOrder]=useState({
    orderId:'',
    paymentStatus: '',
    orderAmt :'',
    billingAddress:''
    });

    const shopmore=()=>{
        navigate('/store');
    }

    useEffect(()=>{
         getOrderById(orderId).then(data=>{
         setOrder(data);
         console.log(data);
        }).catch(error=>{
          console.log(error);
        })
    },[])

  return (
    <Base>
    <div className='home'>
      <Container className='text-center mt-5'>
        <Row>
            <Col>
             <h1>Thank You!</h1>
             <p>Your order has been placed</p>
             <p>Will be delivered to your Registered Address :
                <br></br>
             <b>{order.billingAddress}</b></p>
              <h5>Total Amount: Rs {order.orderAmt}/-</h5>
              <b>Payment Staus: {order.paymentStatus}</b>
             <br></br>
             <br></br>
             <Button onClick={shopmore}>Shop More</Button>
            </Col>
        </Row>
      </Container>
    </div>
    </Base>
  )
}

export default OrderPlaced
