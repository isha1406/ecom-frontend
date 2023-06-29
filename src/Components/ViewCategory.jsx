import React, { useEffect, useState } from 'react'
import { Col, Container, NavLink, Row,Table } from 'reactstrap'
import { loadCategory } from './Service/CategoryService';
import { Link } from 'react-router-dom'
import './Home.scss'
import Base from './Base';

function ViewCat() {


    const[category,setCategory]=useState(null);

  useEffect(()=>{
    loadCategory().then(data=>{
      setCategory(data);
    }).catch(error=>{
      console.log(error);
    })
  },[])



  return (
    <Base>
    <div className='home'>
      <Container>
        <Row className='mt-4'>
            <Col className='mt-5' md={{size:4,offset:3}}>
            <div style={{
            display: 'block', width: 500, padding: 30
        }}>
            <h4 className='text-center'> <NavLink href='/createcategory' className='text-center'>Add more Category</NavLink></h4>
            <br></br>
            <Table>
                <thead>
                    <tr className='text-center'>
                        <th>CategoryId</th>
                        <th>Title</th>
                        <th>Updates</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            (category) && category.map((cat,index)=>(
                                <tr key={index} className='text-center'>
                                <td>{cat.categoryId} </td>
                                <td>{cat.title}</td>
                                <td> <NavLink tag={Link} to={'/updatecategory/'+cat.categoryId}>Edit</NavLink></td>
                                </tr> 
                            ))
                        }
                    
                </tbody>
            </Table>
        </div>
        </Col>
        </Row>
      </Container>
    </div>
    </Base>
  )
}

export default ViewCat
