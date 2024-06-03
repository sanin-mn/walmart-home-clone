import React from 'react'
import '../App.css'
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiGridAlt } from "react-icons/bi";
import { RiApps2Line } from "react-icons/ri";

function subheader() {
    return (
        <div className='sub-header'>
            <Navbar className="pe-5 " style={{backgroundColor:'#EDF6FF'}}>
               
                   <div className='me-auto d-flex'>
                        {/* Department */}
                        <Dropdown className='ms-3'>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                            <BiGridAlt className='mb-1 me-1 fs-5'/>
                                Department
                            </Dropdown.Toggle>
        
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* Services */}
                        <Dropdown className='ms-3'>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                            <RiApps2Line className='mb-1 me-1 fs-5' />
                                Services
                            </Dropdown.Toggle>
        
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   </div>
                   <div className='sub-headings  container-fluid'>
                   <a href="">Deals</a>
                   <a href="">Grocery & essentials</a>
                       <a href="">Fathers day</a>
                       <a href="">Summer shop</a>
                       <a href="">Pride always</a>
                       <a href="">Fashion</a>
                       <a href="">Home</a>
                       <a href="">Electronics</a>
                       {/* <a href="">Patio & Garden</a>
                       <a href="">Registry</a> */}
                       <a href="">One debit</a>
                       <a href="">Walmart+</a>
    
                   </div>
    
                
            </Navbar>
        </div>
    )
}

export default subheader