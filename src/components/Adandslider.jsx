import React from 'react'
import Smallslider from './Smallslider'
import { Col, Row } from 'react-bootstrap'

function Adandslider() {
    return (

        <div className='w-100 me-3 container-fluid'>
            <Row className="w-100 d-flex flex-wrap">
            
                <Col className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                    <img className='w-100 mt-5 img-fluid' style={{borderRadius:'1rem'}} src="https://media.istockphoto.com/id/1056055150/photo/black-friday-promotion-sale-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=_UMG7nY8I6j8HQ1EbkEM_ew63oQE6RsAaCMYIXxOUAA=" alt="" />
                </Col>
                <Col className='col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                    <Smallslider/>
                </Col>
            </Row>
        </div>

    )
}

export default Adandslider