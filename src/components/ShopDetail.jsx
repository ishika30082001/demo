import React, { useState } from "react";
import SmallBar from "./SmallBar";
import Formfil from "./Formfil";
import StarIcon from "./StarIcon";
import Counter from "./Counter";
import { NavLink } from "react-router-dom";

function ShopDetail() {
  
  return (
    <>
      <SmallBar />
      {/* <!----------------------Shop Detail start ---------------> */}
      <div className="container-fluid">
        <div className="row px-xl-5 mb-30">
          <div className="col-lg-5 mb-5">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-1.jpg"
                    className=" w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-4.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>

              <NavLink
                to=""
                className="carousel-control-prev"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark"></i>
              </NavLink>
              <NavLink
                to=""
                className="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#carouselExampleCaptions"
              >
                <i className="fa fa-2x fa-angle-right text-dark"></i>
              </NavLink>
            </div>
          </div>
          {/* <!-------col-lg-5--------------> */}
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3 className="fw-bold text-dark">Product Name Goes Here</h3>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star text-primary"></small>
                  <small className="fas fa-star-half-alt text-primary"></small>
                  <small className="far fa-star text-primary"></small>
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="fw-bold text-dark mb-4">$150.00</h3>
              <p className="mb-4">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem
                magna duo dolor no sea Nonumy
              </p>
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                <form action="">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                      id="radio1"
                    />
                    <label htmlFor="radio1" className="custom-control-label">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      XL
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Colors:</strong>
                <form action="">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      White
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Red
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      name="size"
                      className="custom-control-input"
                    />
                    <label htmlFor="" className="custom-control-label">
                      Green
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
               <Counter className="btn bg-primary shop_cart "/>
                <button className="btn bg-primary shop_cart px-3">
                  <i className="fa fa-shopping-cart mr-2 text-dark"></i>
                  Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <NavLink to="" className=" px-2">
                    <i className="fab fa-facebook-f text-dark"></i>
                  </NavLink>
                  <NavLink to="" className=" px-2">
                    <i className="fab fa-twitter text-dark"></i>
                  </NavLink>
                  <NavLink to="" className=" px-2">
                    <i className="fab fa-linkedin-in text-dark"></i>
                  </NavLink>
                  <NavLink to="" className=" px-2">
                    <i className="fab fa-pinterest text-dark"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          {/* <!-- Nav tabs --> */}
          <div className="tabs_container bg-light py-5">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-dark"
                  data-bs-toggle="tab"
                  to="#home"
                >
                  Description
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark"
                  data-bs-toggle="tab"
                  to="#menu1"
                >
                  Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark"
                  data-bs-toggle="tab"
                  to="#menu2"
                >
                  Reviews(0)
                </NavLink>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div className="tab-content bg-light">
              <div className="tab-pane container active" id="home">
                <h4 className="mb-3 mt-3 text-black">Product Description</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <p>
                  Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
                  ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
                  tempor. Gubergren amet amet labore sadipscing clita clita diam
                  clita. Sea amet et sed ipsum lorem elitr et, amet et labore
                  voluptua sit rebum. Ea erat sed et diam takimata sed justo.
                  Magna takimata justo et amet magna et.
                </p>
              </div>
              <div className="tab-pane container fade" id="menu1">
                <h4 className="mb-3 text-black mt-3">Additional Information</h4>
                <p>
                  Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                  sea. Consetetur vero aliquyam invidunt duo dolores et duo sit.
                  Vero diam ea vero et dolore rebum, dolor rebum eirmod
                  consetetur invidunt sed sed et, lorem duo et eos elitr,
                  sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                  tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                  eos dolores sit no ut diam consetetur duo justo est, sit
                  sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                  accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                  invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                  takimata dolor ea invidunt.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod
                        takimata.
                      </li>
                      <li className="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing
                        at.
                      </li>
                      <li className="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li className="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua.
                        Nonumy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu2">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-4 text-black mt-4">
                      1 review for Product Name
                    </h4>
                    <div className="media mb-4">
                      <img
                        src="https://pnecommerce.netlify.app/img/user.jpg"
                        className="john img-fluid mr-3 mt-1"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>
                          John Doe
                          <small>
                            -<i>01 jan 2045</i>
                          </small>
                        </h6>
                        <div className="text-primary mb-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p>
                          Diam amet duo labore stet elitr ea clita ipsum, tempor
                          labore accusam ipsum et no at. Kasd diam tempor rebum
                          magna dolores sed sed eirmod ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-4 text-black">Leave NavLink review</h4>
                    <small>
                      Your email address will not be published. Required fields
                      are marked *
                    </small>
                    <div className="d-flex my-3">
                      <p className="mb-0 mr-2">Your Rating * :</p>
                      <div className="">
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                        <i className="far fa-star text-primary"></i>
                      </div>
                    </div>
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="">Your Review *</label>
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Your Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          id="name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Your Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name=""
                          id="email"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <input
                          type="submit"
                          value={"Leave Your Review"}
                          className="btn bg-primary shop_cart px-3"
                          name=""
                          id=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----------------------Shop Detail end ---------------> */}

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title text-uppercase fw-bold mb-4 px-xl-5">
          <span className="bg-secondary px-2">You May Also Like </span>
        </h2>

        <div className="row px-xl-5">
          <div class="owl-carousel owl-theme">
            <div class="item me-2">
              <div className="product-item">
                <div className="product-img overflow-hidden">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="product-action">
                    <NavLink to="" className="btn btn-outline-dark mx-1 ">
                      <i className="fa fa-shopping-cart"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark">
                      <i className="far fa-heart"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark mx-1">
                      <i className="fa fa-sync-alt"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark">
                      <i className="fa fa-search"></i>
                    </NavLink>
                  </div>
                </div>

                <div className="product-text-box text-center py-4">
                  <NavLink to="#" className="h6 text-decoration-none">
                    ihihi
                  </NavLink>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5 className="h5">876868</h5>
                    <h6 className="text-muted ms-2">
                      <del>kjbnjk</del>
                    </h6>
                  </div>
                  <StarIcon />
                </div>
              </div>
            </div>
            <div class="item me-2">
              <div className="product-item">
                <div className="product-img overflow-hidden">
                  <img
                    src="https://pnecommerce.netlify.app/img/product-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="product-action">
                    <NavLink to="" className="btn btn-outline-dark mx-1 ">
                      <i className="fa fa-shopping-cart"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark">
                      <i className="far fa-heart"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark mx-1">
                      <i className="fa fa-sync-alt"></i>
                    </NavLink>
                    <NavLink to="" className="btn btn-outline-dark">
                      <i className="fa fa-search"></i>
                    </NavLink>
                  </div>
                </div>

                <div className="product-text-box text-center py-4">
                  <NavLink to="#" className="h6 text-decoration-none">
                    ihihi
                  </NavLink>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5 className="h5">876868</h5>
                    <h6 className="text-muted ms-2">
                      <del>kjbnjk</del>
                    </h6>
                  </div>
                  <StarIcon />
                </div>
              </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-3.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-4.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-5.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-6.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-7.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
            <div class="item me-2">
            <div className="product-item">
              <div className="product-img overflow-hidden">
                <img src="https://pnecommerce.netlify.app/img/product-8.jpg" alt="" className="img-fluid"/>
                <div className="product-action">
                  <NavLink to="" className="btn btn-outline-dark mx-1 ">
                    <i className='fa fa-shopping-cart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='far fa-heart'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark mx-1">
                    <i className='fa fa-sync-alt'></i>
                  </NavLink>
                  <NavLink to="" className="btn btn-outline-dark">
                    <i className='fa fa-search'></i>
                  </NavLink>
                </div>
              </div>
              
              <div className="product-text-box text-center py-4">
                <NavLink to="#" className="h6 text-decoration-none">ihihi</NavLink>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5 className="h5">876868</h5>
                  <h6 className="text-muted ms-2">
                    <del>kjbnjk</del>
                  </h6>
                </div>
                <StarIcon/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopDetail;
