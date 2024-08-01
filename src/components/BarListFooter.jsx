import React from 'react'

function BarListFooter(props) {
  return (
    <>
     
     <div className="col-md-4 mb-5">
            <h5 className="text-white mb-4 text-uppercase fw-bold mt-3 mt-md-0">{props.title}</h5>
            <div className="d-flex flex-column justify-content-start footer_list">
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Home
                </a>
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Our Shop
                </a>
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Shop Detail
                </a>
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Shopping Cart
                </a>
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Checkout
                </a>
                <a href="#" className="text-white mb-2">
                    <i className="fa fa-angle-right me-2 text-white"></i>
                    Contact Us
                </a>
            </div>  
            </div> 
    </>
  )
}

export default BarListFooter
