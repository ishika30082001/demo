import React from "react";
import "../App.css";

function Featured(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div
          className="d-flex align-items-center justify-content-center mb-4"
          style={{ backgroundColor: "#FFFFFF", padding: "30px" }}
        >
          <h1 className={props.className}></h1>
          <h5 className="featureHeadingColors ms-3">{props.title}</h5>
        </div>
      </div>
    </>
  );
}

export default Featured;
