import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Base from './Base'
import Product from './Product'
import './Store.scss'
import {Row,Col, Button} from 'reactstrap'
import { loadProduct } from './Service/ProductService'


function Store() {

  const[productDetails,setProductDetails]=useState(null);

  const[getTotal,setTotal]=useState();
  const[curr,setCurr]=useState(0);

  
  useEffect(()=>{
    getProduct();
  },[curr])

  const getProduct=()=>{
    loadProduct(curr).then(data =>{
      setProductDetails(data);  
      setTotal(data.totalPages);
      setCurr(data.pageNumber);
      console.log(data)
      console.log(productDetails);
    }).catch(error=>{
      console.log(error)
    });
  }


  const prev=()=>{
    let pageNum=curr-1;
    if(pageNum<=0){
      pageNum=0;
    }
    setCurr(pageNum);
  }
  
  const next=()=>{
    let pagenuminc=curr+1;
    console.log(pagenuminc);
      if(pagenuminc >= getTotal){
        pagenuminc=0;
      }
     setCurr(pagenuminc);
  }



  return (
    <Base>
     <div className="pagination">
        <Button onClick={()=>prev()}>Prev</Button> <b> {curr+1} of {getTotal} </b> <Button onClick={()=>next()}>Next</Button>
    </div>
    <div className="store">
      <Sidebar></Sidebar>
      <div className="storeContainer">
        <Row md={3}>
        {
          (productDetails) && (productDetails.content.map((each,index)=>(
            <Col key={index}>
              <Product product={each}></Product>
            </Col>
          )))
        }
        </Row>
      </div>
    </div>
    </Base>
  )
}

export default Store
