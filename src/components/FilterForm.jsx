import React from 'react'
import Formfil from './Formfil'


function FilterForm(props) {
  return (
    <>
     <h5 className="section-title text-uppercase fw-bold mb-4">
          <span className="bg-secondary">{props.title}</span>
      </h5>
    <div className="form bg-light p-4 mb-3">
        <Formfil  label={props.label} priceBox = "1000" seclabel={props.seclabel} secpriceBox={props.secpriceBox} thirdlabel={props.thirdlabel} thirdpriceBox={props.thirdpriceBox}
        fourlabel={props.fourlabel} fourpriceBox={props.fourpriceBox} fivelabel={props.fivelabel} fivepriceBox={props.fivepriceBox} sixlabel={props.sixlabel} sixpriceBox={props.sixpriceBox}/>
      </div>
    </>
  )
}

export default FilterForm
