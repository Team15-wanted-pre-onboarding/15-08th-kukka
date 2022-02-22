import "./ImageView.scss";
import { imageInfo } from "./imageInfo";

const imageView = document.querySelector(".image-view");

const firstImage = imageView.querySelector("#first-image");

const secondImage = imageView.querySelector("#second-image");
const secondHeader = document.getElementById("second-header-info");
const secondTitle = secondHeader.querySelector("p:nth-child(1)");
const secondMoney = secondHeader.querySelector("p:nth-child(2)");

const thiirdImage = imageView.querySelector("#third-image");
const thirdHeader = document.getElementById("third-header-info");
const thirdTitle = thirdHeader.querySelector("p:nth-child(1)");
const thirdMoney = thirdHeader.querySelector("p:nth-child(2)");

const leftBtn = imageView.querySelector("#left-btn");
const rigtBtn = imageView.querySelector("#right-btn");

console.log(secondTitle, thirdTitle); // dom confirm

const ImageView = () => {
  let imageInfoIndex = 0;

  const indexControl = (index) => {
    if (index === imageInfo.length) {
      index = 0;
    } else if (index === imageInfo.length + 1) {
      index = 1;
    }
    return index;
  };

  const addImageSrc = (index) => {
    firstImage.src = imageInfo[index].image;
    secondImage.src = imageInfo[indexControl(index + 1)].image;
    thiirdImage.src = imageInfo[indexControl(index + 2)].image;
  };

  const addInnerMoney = (index) => {
    secondMoney.innerHTML = `${imageInfo[indexControl(index + 1)].money}원`;
    thirdMoney.innerHTML = `${imageInfo[indexControl(index + 2)].money}원`;
  };

  const addInnerTitle = (index) => {
    secondTitle.innerHTML = `${imageInfo[indexControl(index + 1)].title}${
      imageInfo[indexControl(index + 1)].day
    }`;
    thirdTitle.innerHTML = `${imageInfo[indexControl(index + 1)].title}${
      imageInfo[indexControl(index + 1)].day
    }`;
  };

  addImageSrc(imageInfoIndex);
  addInnerMoney(imageInfoIndex);
  addInnerTitle(imageInfoIndex);

  const handleClickRightMove = (e) => {
    if (imageInfoIndex === imageInfo.length - 1) {
      imageInfoIndex = 0;
    } else {
      imageInfoIndex += 1;
    }

    addImageSrc(imageInfoIndex);
    addInnerMoney(imageInfoIndex);
    addInnerTitle(imageInfoIndex);
  };

  const handleClickLeftMove = (e) => {
    if (imageInfoIndex === 0) {
      imageInfoIndex = imageInfo.length - 1;
    } else {
      imageInfoIndex -= 1;
    }

    addImageSrc(imageInfoIndex);
    addInnerMoney(imageInfoIndex);
    addInnerTitle(imageInfoIndex);
  };

  leftBtn.addEventListener("click", handleClickLeftMove);
  rigtBtn.addEventListener("click", handleClickRightMove);
};

export default ImageView;
