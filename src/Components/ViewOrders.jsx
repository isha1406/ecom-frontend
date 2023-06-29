import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Table } from 'reactstrap'
import { loadOrder } from './Service/OrderService';
import { checkdelivery, enorders, outdelivery } from './Auth';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './Home.scss'
import Base from './Base';

function ViewOrders() {

    let navigate=useNavigate();
    const[orders,setOrders]=useState(null);
    const[pgnum,setPgNum]=useState(0);
    const[totalp,setTotalp]=useState();

    useEffect(()=>{
      loadOrder(pgnum).then(data=>{
        setOrders(data);
        enorders(data);
        setTotalp(data.totalPage);
    }).catch(error=>{
        console.log(error)
    });           
      },[pgnum])

   const getback=()=>{
    outdelivery(()=>{
          navigate("/admindash")
      })
    };

    const nextPage=()=>{     
      let pagenuminc=pgnum+1;
      if(pagenuminc >= totalp){
        pagenuminc=0;
      }
     setPgNum(pagenuminc);
   }
   
   const prevPage=()=>{     
    let pageNum=pgnum-1;
    if(pageNum<=0){
      pageNum=0;
    }
    setPgNum(pageNum);
   }
 

    return (
      <Base>
      <div className='home'>
        <Container>
          <Row>
              <Col className='mt-5' md={{size:6,offset:2}}>
              <div >
              <h4 className='text-center'><span>All Orders <Button onClick={getback}>Back</Button></span></h4>                                 
              <br></br>
              <Table>
                  <thead>
                      <tr className='text-center'>
                          <th>OrderId</th>
                          <th>UserName</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Contact</th>
                          <th>Payment</th>
                          <th>Amount</th>
                          <th>View</th>
                          <th>Delivery</th>
                         
                      </tr>
                  </thead>
                  <tbody>
                       {
                            (orders) && orders.content.map((od,index)=>(
                                <tr key={index} className='text-center'>
                                <td>{od.orderId}</td>
                                <td>{od.user.name}</td>
                                <td>{od.user.email}</td>
                                <td>{od.user.address}</td>
                                <td>{od.user.phone}</td>
                                <td>{od.paymentStatus}</td>
                                <td>{od.orderAmt}</td>  
                                <td>View</td>                    
                                 <td>
                                    {(!checkdelivery()) && (<>Not Done</>)}
                                    {(checkdelivery()) && (<>Done</>)}                                   
                                </td>
                                <td></td>
                                </tr>
                            ))
                       }                  
                  </tbody>
              </Table>

              <Button onClick={()=>prevPage()}>Prev</Button> {pgnum+1} of {totalp} <Button onClick={()=>nextPage()}>Next</Button>
          </div>
          </Col>
          </Row>
        </Container>
      </div>
      </Base>
    )
  }

export default ViewOrders
