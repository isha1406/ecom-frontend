import React from 'react'
import { Col,Row,Container } from 'reactstrap'

function Footer() {
  return (
    <div>
       <div className="bg-light text-dark">
      <Container className='text-center'>
        <Row className='text-center'>
          <Col>
            <p className="text-center mt-2">&copy; {new Date().getFullYear()} ShppingM4 Website. All rights reserved.</p>
            <p className="text-center">ishachoudhary6105@gmail.com</p>
          </Col>
          </Row>
      </Container>
    </div>
    </div>
  )
}

export default Footer
