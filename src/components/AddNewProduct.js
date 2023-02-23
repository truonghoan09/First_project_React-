import React, { useState } from "react";

const AddNewProduct = () => {
  let check = localStorage.getItem("producList");
  if (!check) {
    localStorage.setItem("idProduct", 0);
  }
  const setUpId = () => {
    localStorage.setItem(
      "idProduct",
      Number(localStorage.getItem("idProduct")) + 1
    );
    return localStorage.getItem("idProduct");
  };

  const handleClickBut = () => {
    alert("<<<You Clicked!>>>");
    const idNew = () => {
      return setUpId();
    };
    let id = idNew();
    console.log(id);
    let obj = {
      name,
      price,
      size,
      color,
      id: id,
    };
    let listProduct = localStorage.getItem("producList");
    if (!listProduct) {
      localStorage.setItem("producList", JSON.stringify([obj]));
    } else {
      let arr = JSON.parse(localStorage.getItem("producList"));
      arr.push(obj);
      localStorage.setItem("producList", JSON.stringify(arr));
      setName("");
      setSize(0);
      setColor("");
      setPrice(0);
    }
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
      <div>
        List Product:
        {localStorage.getItem("producList")}
      </div>
    </div>
  );
};

export default AddNewProduct;
