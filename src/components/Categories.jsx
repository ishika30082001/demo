import React from 'react'

function Categories(props) {
  return (
    <>
        <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="" className="text-decoration-none ">
              <div className="cat-item d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
                  <img src={props.imageUrl} alt="" className="img-fluid"/>
                </div>
                  <div className="heading">
                    <h6 className="featureHeadingColors ps-1">{props.mainHeading}</h6>
                    <small className="text-body ps-1">{props.subTitle}</small>
                  </div>
              </div>
            </a>
          </div>
    </>
  )
}

export default Categories
