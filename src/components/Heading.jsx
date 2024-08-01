import React from 'react'

function Heading(props) {
  return (
    <>
     <div className={props.className}>
            <span className="bg-secondary px-2">{props.heading}</span>
          </div> 
    </>
  )
}

export default Heading
