import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import { ListGroup, ListGroupItem ,NavLink } from 'reactstrap'
import { loadCategory } from '../Service/CategoryService'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getUserRole } from '../Auth'
import { toast } from 'react-toastify';

function Sidebar() {

  const[category,setCategory]=useState(null);
  const{categoryId}=useParams();

 
  useEffect(()=>{
    loadCategory().then(data=>{
      setCategory(data);
    }).catch(error=>{
      console.log(error);
    })
  },[])

  return (
    
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Category</span>
      </div>
      <hr></hr>
      <div className="center">
      <div className="title">
        <ListGroup>
        <ListGroupItem action="true" tag={Link} to="/store" className='border-0'>All</ListGroupItem>
           {
             (category) && (
              category.map((cat,index)=>(
                <ListGroupItem  tag={Link} to={'/categories/'+cat.categoryId} action="true" className='border-0' key={index}>{cat.title}</ListGroupItem>
                
              ))
             )
           }
        </ListGroup>
        <hr></hr>

        {
              (getUserRole()=="ADMIN") && (<>
              <NavLink tag={Link} to={'/createproduct/'+categoryId}><h3>Add products</h3></NavLink>
        </>)
        }    

      </div>
    </div>
    
  </div>

  )
}

export default Sidebar
