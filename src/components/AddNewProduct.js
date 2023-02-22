import React, { useState } from "react";

const AddNewProduct = () => {
  const handleClickBut = () => {
    alert("<<<You Clicked!>>>");
    let obj = {
      name,
      price,
      size,
      color,
    };
    console.log(`>>>> Check object: `, obj);
  };
  const handleClearForm = () => {
    setName("");
    setSize(0);
    setColor("");
    setPrice(0);
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(true);
  const handleHideOrShow = () => {
    setIsShowDetail(!isShowDetail);
  };
  const handleClickInput = (val, func) => {
    if (val === 0) {
      func("");
    }
  };

  return (
    <div>
      {isShowDetail === true ? (
        <div className="hideAndShow" onClick={() => handleHideOrShow()}>
          Hidden this form!
        </div>
      ) : (
        <div className="hideAndShow" onClick={() => handleHideOrShow()}>
          Show the form!
        </div>
      )}
      {isShowDetail === true ? (
        <fieldset>
          <legend>Add new product</legend>

          <div className="input-product">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Price:</label>
            <input
              type="text"
              value={price}
              onClick={() => handleClickInput(price, setPrice)}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Size:</label>
            <input
              type="text"
              value={size}
              onClick={() => handleClickInput(size, setSize)}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Color:</label>
            <input
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <button
            className="addNewProductButt"
            onClick={() => handleClickBut()}
          >
            Add
          </button>
          <button className="clearForm" onClick={() => handleClearForm()}>
            Clear
          </button>
        </fieldset>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddNewProduct;
