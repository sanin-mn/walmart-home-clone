import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Mousewheel } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import data from '../../public/data';

import '../App.css'



function Cardsliders() {
  return (
    <div className='ms-3 me-3'>
    <div className='mt-3 mb-3'>
      <h3 className='mb-0'>Flash Deals</h3>
      <small className='text-muted'>Up to 65% off</small>
    </div>
      <Swiper
      // slidesPerView={4}
      // spaceBetween={10}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        961:{
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
      modules={[Pagination,Mousewheel]}
      className="mySwiper align-center"
    >
         {
            data.map((d)=>(
              <SwiperSlide>
               <Card style={{ width: '13rem' }}>
                  <Card.Img variant="top" src={d.img} style={{height:'8rem'}}/>
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

export default Cardsliders