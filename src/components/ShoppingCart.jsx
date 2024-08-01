import React from "react";
import SmallBar from "./SmallBar";
import Counter from "./Counter";
import ShopTable from "./ShopTable";
import { Form } from "react-router-dom";
import Heading from "./Heading";

function ShoppingCart() {
  return (
    <>
      <SmallBar />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <table className="table table-borderless table-responsive">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <ShopTable imageUrl="https://pnecommerce.netlify.app/img/product-1.jpg" />
              <ShopTable imageUrl="https://pnecommerce.netlify.app/img/product-2.jpg" />
              <ShopTable imageUrl="https://pnecommerce.netlify.app/img/product-3.jpg" />
              <ShopTable imageUrl="https://pnecommerce.netlify.app/img/product-4.jpg" />
              <ShopTable imageUrl="https://pnecommerce.netlify.app/img/product-5.jpg" />
            </table>
          </div>

          <div className="col-lg-4">
            <form action="" className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="form-control border-0 p-3"
                />
                <div className="input-group-append">
                  <button className="btn bg-primary text-black">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>

            <Heading
              heading="Cart Summary"
              className="section-title text-uppercase fw-bold mb-4 mb-3 h5"
            />
            <div className="bg-light p-4">
              <div className="border-bottom">
                <div className="d-flex justify-content-between">
                  <h6 className="text-dark">Subtotal</h6>
                  <p className="text-dark">$150</p>
                </div>

                <div className="d-flex justify-content-between">
                  <h6 className="text-dark">Shipping</h6>
                  <p className="text-dark">$10</p>
                </div>
              </div>

              <div className="total pt-2">
                <div className="d-flex justify-content-between">
                    <h5 className="text-dark fw-bold">Total</h5>
                    <h5 className="text-dark fw-bold">$160</h5>
                </div>
              </div>

              <button className="btn bg-primary  text-dark fw-bold w-100 p-3 mt-4">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
