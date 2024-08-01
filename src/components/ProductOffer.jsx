import React from "react";

function ProductOffer(props) {
  return (
    <>
      <div className="product-offer mb-3">
        <img
          src={props.imageUrl}
          alt=""
          className="img-fluid"
        />
        <div className="offer-text">
          <h6 className="text-white text-uppercase">{props.saveDiscount}</h6>
          <h3 className="text-white">{props.specialOffer}</h3>
          <a href="" className="btn bg-primary">
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductOffer;
