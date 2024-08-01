import React, { useState } from "react";

function StarIcon() {
    const [bgColor, setBgColor] = useState(true);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <span><small className="fa fa-star text-primary"></small></span>
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        {bgColor ? (
          <small
            className="fa fa-star "
            onClick={(e) => setBgColor(false)}
          ></small>
        ) : (
          <small
            className="fa fa-star text-primary"
            onClick={(e) => setBgColor(true)}
          ></small>
        )}
        <small>(99)</small>
      </div>
    </>
  );
}

export default StarIcon;
