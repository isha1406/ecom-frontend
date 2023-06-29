import React from 'react'
import {Row,Col, Container, Card, CardBody } from 'reactstrap'
import{NavLink} from 'reactstrap';
import './Home.scss'
import Base from './Base';

function Admindash() {
  return (
    <Base>
   <div className='home'>
    <Container >
        <Row className='text-center mt-5'>
        <Col>
          <h2>Welcome Admin!👋</h2>
        </Col>
      </Row>
      
    <Row>
      <Col md={{size:4,offset:4}}>
      <Card className='shadow-lg mt-5 text-center' color='light'>
        <CardBody>
      <NavLink href='/vieworders'><h5>View Orders</h5></NavLink> 
      <NavLink href='/store'><h5>View Products</h5></NavLink> 
      <NavLink href='/viewcat'><h5>View Category</h5></NavLink> 
      </CardBody>
    </Card>

      </Col>
    </Row>
    
    </Container>
   
   </div>

   </Base>
  )
}

export default Admindash;
