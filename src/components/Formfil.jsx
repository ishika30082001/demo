import React from "react";

function Formfil(props) {
  return (
    <>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className="" id="#" />
            <label  className="custome-control-label ms-2">
              {props.label}
            </label>
          </div>
          <span className="border px-1">{props.priceBox}</span>
        </div>
      </form>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className="" id="#" />
            <label  className="custome-control-label ms-2">
              {props.seclabel}
            </label>
          </div>
          <span className="border px-1">{props.secpriceBox}</span>
        </div>
      </form>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className="" id="#" />
            <label  className="custome-control-label ms-2">
              {props.thirdlabel}
            </label>
          </div>
          <span className="border px-1">{props.thirdpriceBox}</span>
        </div>
      </form>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className="" id="#" />
            <label  className="custome-control-label ms-2">
              {props.fourlabel}
            </label>
          </div>
          <span className="border px-1">{props.fourpriceBox}</span>
        </div>
      </form>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className="" id="#" />
            <label  className="custome-control-label ms-2">
              {props.fivelabel}
            </label>
          </div>
          <span className="border px-1">{props.fivepriceBox}</span>
        </div>
      </form>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <div className="input-item">
            <input type="checkbox" className=""  />
            <label className="custome-control-label ms-2">
              {props.sixlabel}
            </label>
          </div>
          <span className="border px-1">{props.sixpriceBox}</span>
        </div>
      </form>
    </>
  );
}

export default Formfil;
