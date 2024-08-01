import React from "react";
import SmallBar from "./SmallBar";
import FilterForm from "./FilterForm";
import FeatProduct from "./FeatProduct";
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <>
      <SmallBar />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <FilterForm
              title="Filter By price"
              label="All Price"
              seclabel="$200 - $300"
              secpriceBox="150"
              thirdlabel="$100 - $200"
              thirdpriceBox="295"
              fourlabel="$200 - $300"
              fourpriceBox="246"
              fivelabel="$300 - $400"
              fivepriceBox="145"
              sixlabel="$400 - $500"
              sixpriceBox="168"
            />
            <FilterForm
              title="Filter By Color"
              label="All Color"
              seclabel="Black"
              secpriceBox="150"
              thirdlabel="White"
              thirdpriceBox="295"
              fourlabel="Red"
              fourpriceBox="246"
              fivelabel="Blue"
              fivepriceBox="145"
              sixlabel="Green"
              sixpriceBox="168"
            />
            <FilterForm
              title="Filter By Size"
              label="All Size"
              seclabel="XS"
              secpriceBox="150"
              thirdlabel="S"
              thirdpriceBox="295"
              fourlabel="M"
              fourpriceBox="246"
              fivelabel="L"
              fivepriceBox="145"
              sixlabel="XL"
              sixpriceBox="168"
            />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="button">
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large btn-light"></i>
                    </button>
                    <button className="btn btn-light btn-sm ms-2">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>

                  <div className="btn-group">
                    <div className="dropdown-button">
                      <button
                        className="btn btn-light btn-sm dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sorting
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Latest
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Popularity
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Best Rating
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>

                    <div className="dropdown-button ms-2">
                      <button
                        className="btn btn-light btn-sm dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Showing
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              10
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              20
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              30
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-1.jpg"
                Product="Camera"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-2.jpg"
                Product="Tshirt"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-3.jpg"
                Product="Lamp"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4 mt-md-0"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-4.jpg"
                Product="Shoe"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4 mt-md-0"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-5.jpg"
                Product="SpyCamera"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-6.jpg"
                Product="Watch"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-7.jpg"
                Product="Top"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4"
              />
              <FeatProduct
                imageUrl="https://pnecommerce.netlify.app/img/product-8.jpg"
                Product="FaceMositurizer"
                price="$123.00"
                oldPrice="$123.00"
                className="product-item mt-4"
              />

              <div className="col-12">
                <div className="pages-btn">
                  <nav>
                    <ul className="pagination justify-content-center mt-3">
                      <li className="page-item">
                        <NavLink to="/" className="page-link text-primary">Previous</NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link">1</NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link ">2</NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link ">3</NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink to="#" className="page-link">Next</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
