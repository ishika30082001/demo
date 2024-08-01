import React, { useState } from "react";
import Featured from "./Featured";
import Categories from "./Categories";
import FeatProduct from "./FeatProduct";
import ProductOffer from "./ProductOffer";
import Footer from "./Footer";
import Heading from "./Heading";

function Home() {
  const [bgColor, setBgColor] = useState(true);
  return (
    <>
      {/* carousel starts here  */}
      <div className="container-fluid mb-4 mt-3">
        <div className="row px-xl-5">
          {/* owl carousel  */}
          <div className="col-lg-8">
            <div
              id="carouselExampleCaptions"
              className="carousel slide mb-4"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  style={{
                    width: "25px",
                    height: "25px",
                    border: "1px solid white",
                  }}
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src=" https://pnecommerce.netlify.app/img/carousel-1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__backInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto text-white animate__animated animate__bounceIn">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src=" https://pnecommerce.netlify.app/img/carousel-2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto text-white animate__animated animate__bounceIn ">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://pnecommerce.netlify.app/img/carousel-3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div className="p-5">
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p className=" w-50 mx-auto  text-white animate__animated animate__bounceIn">
                        "Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam"
                      </p>
                      <a
                        className="btn btn-outline-light shopbtn animate__animated animate__backInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <ProductOffer
              imageUrl="https://pnecommerce.netlify.app/img/offer-1.jpg"
              saveDiscount="SAVE 20%"
              specialOffer="Special Offer"
            />
            <ProductOffer
              imageUrl="https://pnecommerce.netlify.app/img/offer-2.jpg"
              saveDiscount="SAVE 20%"
              specialOffer="Special Offer"
            />
          </div>
        </div>
      </div>
      {/* carousel end here  */}
      {/* featured start here  */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <Featured
            title="Quality Product"
            className="fa fa-check text-primary"
          />
          <Featured
            title="Free Shipping"
            className="fa fa-shipping-fast text-primary"
          />
          <Featured
            title="14-Day Return"
            className="fas fa-exchange-alt text-primary"
          />
          <Featured
            title="24/7 support"
            className="fa fa-phone-volume text-primary"
          />
        </div>
      </div>
      {/* featured code ends here \ */}

      {/* categories code starts here\ */}
      <div className="container-fluid pt-5">
        <h2 className="section-title text-uppercase mb-4 px-xl-5">
          <span className="bg-secondary fw-bold px-2">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          <Categories
            mainHeading="Category Name"
            subTitle="100 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-1.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="100 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-2.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-4.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-3.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-2.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-4.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-3.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-2.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-3.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-1.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-4.jpg"
          />
          <Categories
            mainHeading="Category Name"
            subTitle="200 Products"
            imageUrl="https://pnecommerce.netlify.app/img/cat-1.jpg"
          />
        </div>
      </div>

      {/* Featured Products starts here  */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title text-uppercase fw-bold mb-4 px-xl-5">
          <span className="bg-secondary px-2">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
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
            className="product-item "
          />
          <FeatProduct
            imageUrl="https://pnecommerce.netlify.app/img/product-4.jpg"
            Product="Shoe"
            price="$123.00"
            oldPrice="$123.00"
            className="product-item "
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
        </div>
      </div>
      {/* Offer Start here  */}
      <section className="offer_start">
        <div className="container-fluid pt-5 pb-3">
          <div className="row px-xl-5">
            <div className="col-md-6">
              <ProductOffer
                imageUrl="https://pnecommerce.netlify.app/img/offer-1.jpg"
                saveDiscount="SAVE 20%"
                specialOffer="Special Offer"
              />
            </div>

            <div className="col-md-6">
              <ProductOffer
                imageUrl="https://pnecommerce.netlify.app/img/offer-2.jpg"
                saveDiscount="SAVE 20%"
                specialOffer="Special Offer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Product start here  */}
      <section className="offer_start">
        <div className="container-fluid pt-5 pb-3">
          <Heading
            heading="Recent Products"
            className=" h2 section-title text-uppercase fw-bold mb-4 px-xl-5"
          />
          <div className="row px-xl-5">
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
              className="product-item "
            />
            <FeatProduct
              imageUrl="https://pnecommerce.netlify.app/img/product-4.jpg"
              Product="Shoe"
              price="$123.00"
              oldPrice="$123.00"
              className="product-item "
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
          </div>
        </div>
      </section>
      {/* vendor owlcarousel second start here  */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div class="owl-carousel owl-theme">
              <div class="item item-home bg-light d-flex justify-content-center">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-1.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-2.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-3.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-4.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-5.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-6.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-7.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
              <div class="item item-home bg-light d-flex justify-content-center p-4">
                <img
                  src="https://pnecommerce.netlify.app/img/vendor-8.jpg"
                  alt=""
                  className="w-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
