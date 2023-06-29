import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Row,Col} from 'reactstrap'
import Product from './Product'
import { getProductbyCategory } from './Service/ProductService'
import Base from './Base'
import { useParams } from 'react-router-dom'
import './Store.scss'

function Categories() {


    const[productDetails,setProductDetails]=useState([]);
    const{categoryId}=useParams();

  useEffect(()=>{
    getProductbyCategory(categoryId).then(data =>{
    setProductDetails([...data]);
  }).catch(error=>{
    console.log(error)
  });
  },[categoryId])

  

  return (
    
    <Base>
    <div className="store">
      <Sidebar></Sidebar>
      <div className="storeContainer">
      
        <Row md={3}> 
        {
          (productDetails) && (productDetails.map((each,index)=>(
            <Col key={index}>
              <Product product={each}></Product>
            </Col>
          )))
        }     
        { productDetails.length<=0 ?<h3>No Product in this category</h3>:''}
        
        </Row>
      
       
        
      </div>
    </div>
    </Base>
  )
}

export default Categories



