import React from 'react'
import { Row,Col,CardBody,Card,Container } from 'reactstrap';
import Base from './Base';
import { getCurrentUser, getUserRole } from './Auth';
import './Home.scss'

function Dashboard() {

  const user=getCurrentUser();
  const roling=getUserRole();
  return (
    <Base>
    <div className='home'>
     <Container>
      <Row>
        <Col  md={{size:8,offset:2}}>
          <Card className='mt-5'>
            <CardBody className='text-center mt-5'>
              <h3>Welcome, {user.name}!</h3>
              <p>This is your user dashboard.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{size:8,offset:2}} className='mt-4'>
          <Card>
            <CardBody className='text-center'>
              <h5>User Information</h5>
              <div className='mt-4'>
             
              <p><strong>Name :</strong> {user.name}</p>
              <p><strong>Gender :</strong> {user.gender}</p>
              <p><strong>Email :</strong> {user.email}</p>
              <p><strong>Phone :</strong> {user.phone}</p>
              <p><strong>Address :</strong> {user.address}</p>
              <p><strong>About :</strong> {user.about}</p>
              <p><strong>Role :</strong> {roling}</p>
              </div>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </Container>
      </div>
    </Base>
  )
}

export default Dashboard

