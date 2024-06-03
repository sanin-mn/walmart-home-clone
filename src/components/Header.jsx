import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosSearch } from "react-icons/io";
import Card from 'react-bootstrap/Card';
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
function Header() {
    return (
        <Navbar expand="lg" className="bg-primary ">
            <Container fluid>
                <Navbar.Brand href="#"><img src="./images/logo.png" alt="" style={{ width: '5rem' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Dropdown className='me-3'>

                            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#355A9A', borderRadius: '5rem' }}>
                                <img
                                    className='align-self-center'
                                    style={{ borderRadius: "50%" }}
                                    width="40"
                                    src={'./images/route.png'} alt="" />

                                <small>How do you want your items?</small>
                                <small>thrissur</small>

                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-primary'>
                                
                                <Dropdown.Item href="#/action-1"><img src="./images/delivery-truck.png" width={40} alt="" />{" "}Shipping</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><img src="./images/delivery.png" width={40} alt="" />{" "}Pickup</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><img src="./images/delivery-bike.png" width={40} alt="" />{" "}Delivery</Dropdown.Item>
                                {/* drop down card */}
                                <Card className="text-center m-2">
                                    <Card.Body>
                                        <Card.Text><small>Add an address for shipping and delivery</small></Card.Text>
                                        <Button variant="primary" size='sm' width="100%">Add Address</Button>
                                    </Card.Body>
                                </Card>
                            </Dropdown.Menu>
                        </Dropdown>
                {/* search */}
                <Form className="d-flex me-auto search" >
                        <Form.Control
                            type="search"
                            placeholder="Search every thing at walmart online and instore"
                            className="me-2"
                            aria-label="Search"
                            style={{height:'3rem',borderRadius:'5rem'}}
                        />

                        <Button style={{borderRadius:'3rem',backgroundColor:'#355A9A'}} className='me-3'><IoIosSearch/></Button>
                    </Form>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                    </Nav>
                    

                    <Dropdown >
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{borderRadius:'5rem'}}>
                        <IoMdHeartEmpty />
                            My items
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" style={{borderRadius:'5rem'}} ><HiOutlineUser />Account</Button>
                    <Button variant="primary" style={{borderRadius:'5rem'}} className='me-5'><FiShoppingCart />₹0.00</Button>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Header