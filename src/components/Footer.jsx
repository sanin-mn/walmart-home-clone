import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'

function Footer() {
  return (
    <div className=' mt-5 footer'>
        
      
        <div className='text-center top-footer'>
            <p>We’d love to hear what you think!</p>
            <Button variant="outline-dark" className='ms-2'>Give feedback</Button>
        </div>
        <div className='text-center bottom-footer'>
            <p className=''>All Departments
Store Directory
Careers
Our Company
Sell on Walmart.com
Help
Product Recalls
Accessibility
Tax Exempt Program
Get the Walmart App
Sign-up for Email
Safety Data Sheet
Terms of Use
Privacy & Security
California Supply Chain Act
Privacy choices iconYour Privacy Choices
Notice at Collection
NV Consumer Health Data Privacy Notice
WA Consumer Health Data Privacy Notice
Request My Personal Information
Brand Shop Directory
Pharmacy
Walmart Business
#IYWYK
Delete Account</p>
<small>© 2024 Walmart. All Rights Reserved.</small>
        </div>
      
    </div>
  )
}

export default Footer