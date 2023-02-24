import "./Product.scss";
import React, { useState } from "react";
import image1 from "../../assets/image/1.jpg";
import image2 from "../../assets/image/2.jpg";
import image3 from "../../assets/image/3.jpg";
import image4 from "../../assets/image/4.jpg";
import image5 from "../../assets/image/5.jpg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Product = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentLagreImg, setCurrent] = useState(image1);
  const handleClickThumb = (img) => {
    setCurrent(img);
  };

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickCurrent = () => {
    const getIndex = images.indexOf(currentLagreImg);
    setPhotoIndex(getIndex);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="productContainer">
        <div className="leftContent">
          <div className="imageLarge">
            <img
              className="img"
              src={currentLagreImg}
              onClick={() => {
                handleClickCurrent();
              }}
            />
          </div>
          <div className="imageSmall">
            <div>
              <img
                className={image1 === currentLagreImg ? "active" : "thumb"}
                src={image1}
                onClick={() => {
                  handleClickThumb(image1);
                }}
              />
            </div>
            <div>
              <img
                className={image2 === currentLagreImg ? "active" : "thumb"}
                src={image2}
                onClick={() => {
                  handleClickThumb(image2);
                }}
              />
            </div>
            <div>
              <img
                className={image3 === currentLagreImg ? "active" : "thumb"}
                src={image3}
                onClick={() => {
                  handleClickThumb(image3);
                }}
              />
            </div>
            <div>
              <img
                className={image4 === currentLagreImg ? "active" : "thumb"}
                src={image4}
                onClick={() => {
                  handleClickThumb(image4);
                }}
              />
            </div>
            <div>
              <img
                className={image5 === currentLagreImg ? "active" : "thumb"}
                src={image5}
                onClick={() => {
                  handleClickThumb(image5);
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightContent">
          <div className="nameProduct">
            Giày chạy bộ thể thao nam New Balance Stability - M860M12
          </div>
          <div className="backgroundContent">
            <div className="priceProduct">1.848.000 ₫</div>
            <div className="sizeProduct">Size: 43</div>
          </div>
          <div className="action">
            Số lượng
            <br />
            <input type="number" min={1} className="classQuantity"></input>
            <br />
            <button className="buyButton">Chọn mua</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          animationOnKeyInput={true}
          animationDuration={500}
        />
      )}
    </div>
  );
};

export default Product;
