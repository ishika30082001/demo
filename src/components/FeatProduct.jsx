import React from 'react'
import StarIcon from './StarIcon'

function FeatProduct(props) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={props.className}>
              <div className="product-img overflow-hidden">
                <img src={props.imageUrl} alt="" className="img-fluid"/>
                <div className="product-action">
                  <a href="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </a>
                  <a href="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </a>
                  <a href="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </a>
                  <a href="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </a>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <a href="#" className="h6 text-decoration-none">{props.Product}</a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">{props.price}</h5>
                  <h6 className="text-muted ms-2">
                    <del>{props.oldPrice}</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
          </div>  
    </>
  )
}

export default FeatProduct
