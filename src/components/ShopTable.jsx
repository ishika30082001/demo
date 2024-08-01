import React from "react";
import Counter from "./Counter";
import "../App.css";
function ShopTable(props) {
  return (
    <>
      <tbody>
        <tr>
          <td className="align-middle">
            <img src={props.imageUrl} alt="" style={{ width: "50px" }} />
            Product name
          </td>
          <td className="align-middle">$150</td>
          <td className="align-middle ">
            <Counter className="btn bg-primary shop_cart px-2 py-1" />
          </td>
          <td className="align-middle">$150</td>
          <td className="align-middle">
            <button className="btn btn-danger btn-sm">
              <i className="fa fa-times text-white fw-bold"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ShopTable;
