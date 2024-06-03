import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function SalesAlert() {
  return (
    <div className='container-fluid mt-5'>
        
      
        <Alert variant='light shadow' className='text-center'>
            <img src="./images/credit.png" alt="credit" className='me-2' style={{width:'2.5rem'}}/>
            Earn 3% cash back on Walmart.com
            <Button variant="outline-dark" className='ms-2'>Learn more</Button>
        </Alert>
      
    </div>
  )
}

export default SalesAlert