import React, { useEffect } from 'react'
import { useState } from 'react';
import pic from '../Components/Images/flipkartlogo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { checkLogin,getCurrentUser,getUserRole,logout } from './Auth';
import { useNavigate } from 'react-router-dom';
function CustomNavbar() {

  let navigate=useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  
  const[login,setLogin]=useState(false);
  const[user,setUser]=useState(null);



  useEffect(()=>{
      setLogin(checkLogin())
      setUser(getCurrentUser())
  },[login])

  const toggle = () => setIsOpen(!isOpen);

  const dologout=()=>{
    logout(()=>{
      //logout
        navigate("/store")
    })
  }

  return (
    <div>
      <Navbar color='light' expand='md' className='px-5 shadow-sm'>
        <NavbarBrand className='me-auto'>
          <img src={pic} alt="loading" style={{height:50,width:50}}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/store">Store</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                 About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://twitter.com/Flipkart">Twitter</DropdownItem>
                <DropdownItem href="https://www.facebook.com/flipkart/">FaceBook</DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
          <Nav>
            {
              (checkLogin()) && (<>
              <NavItem>
              <NavLink href='/user/dashboard'>{getCurrentUser().name}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={dologout}>Logout</NavLink>
            </NavItem>             
            </>)
            } 

            {
               (!checkLogin()) && (<>
               <NavItem>
               <NavLink href='/login'>Login</NavLink>
               </NavItem>
               <NavItem>
               <NavLink href='/signup'>SignUp</NavLink>
               </NavItem>
               </>)
            }

            {
              (getUserRole()=="USER") && (<>
               <NavItem>
              <NavLink href='/user/cart'>Cart</NavLink>
              </NavItem>
              </>) 
            }

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar
