import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  function add_on() {
    if (count >= 0) {
      setCount(count + 1);
    }
  }
  function sub_on(e) {
    if (count === 0) {
      setCount(count);
    } else if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="input-group quantity wid mr-3">
        <div className="input-group-btn">
          <button className={props.className}>
            <i className="fa fa-minus" onClick={(e) => sub_on()}></i>
          </button>
        </div>
        <input
          type="text"
          className="form-control bg-secondary border-0 text-center"
          placeholder={count}
        />
        <div className="input-group-btn">
          <button
            className={props.className}
            onClick={() => add_on()}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
 