import React from 'react'
import Base from './Base'
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import './Home.scss'
import Footer from './Footer'

function About() {
  return (
    <Base>
    <div className='home'>
    <Container>
      <Row>
        <Col>
          <Card className='mt-5'>
            <CardBody className='text-center'>
              <h3>About Us</h3>
              <br></br>
              <p>Welcome to our ecommerce website! We are dedicated to providing you with the best online shopping experience.</p>
              <p>At our store, you can find a wide range of products from various categories including electronics, fashion, home decor, and more.</p>
              <p>Our mission is to offer high-quality products at affordable prices, delivered right to your doorstep.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='mt-5 text-center'>
            <CardBody>
              <h4>Our Team</h4>
              <br></br>
              <p>We have a passionate and dedicated team working behind the scenes to ensure that you have a seamless shopping experience.</p>
              <p>From product sourcing and quality control to customer support, our team is committed to serving you.</p>
              <p>If you have any questions or need assistance, feel free to reach out to our friendly team members.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>   
    </div>
    <Footer/>
    </Base>
  )
}

export default About;
