import React from 'react'
import Base from './Base'
import { Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import photo from '../Components/Images/ecomgirl.png'
import './Home.scss'

function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{  
    navigate('/store');
  }
  

  return (
    <Base>
    <div className='home'>
      <div className='top'>
      <h2>Welcome! To ShoppingM4</h2>
      </div>
      <div className='body'>
        
        <div>
        <h2>New Collection</h2>
        <h2>Sale 40%</h2>
        <Button className='sm' onClick={routeChange}>Shop Now</Button> 
        </div>
        <div>
        <img src={photo} style={{height:500,width:500}} alt="loading"></img>
        </div>
   
     </div>
    </div>
    </Base>
  )
}

export default Home
