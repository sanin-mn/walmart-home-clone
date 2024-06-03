import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Mousewheel } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import lessdata from '../../public/lessdata.js';

import '../App.css'



function Smallslider() {
  return (
    <div className='ms-5 me-3 w-100'>
    <h2 className='mt-3'>Fashion Deals</h2>
    <small className='text-muted'>Up to 45% off</small>
      <Swiper
      // slidesPerView={4}
      // spaceBetween={10}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        961:{
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      }}
      modules={[Pagination,Mousewheel]}
      className="mySwiper align-center"
    >
         {
            lessdata.map((d)=>(
              <SwiperSlide className='mt-3'>
               <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src={d.img} style={{height:'9rem'}}/>
                  <Card.Body>
                      <Card.Title className='fs-6 text-center'>{d.name}</Card.Title>
                      <p className='text-center'>{d.review}</p>
                      <Card.Text className='text-success '>
                          {d.price}
                      </Card.Text>
                      <Button variant="btn btn-outline-dark">Option</Button>
                  </Card.Body>
              </Card>
              </SwiperSlide>
            ))
         }
         
      
    </Swiper>
    </div>
  )
}

export default Smallslider