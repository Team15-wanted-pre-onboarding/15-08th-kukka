import "./ImageView.scss";

const imageInfo = [
  {
    id: 1,
    image:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_web_R0tReO1.jpeg",
    title: "취미 클래스(총 4회)",
    day: "2/21(월)~2/27(일)",
    money: 299000,
  },
  {
    id: 2,
    image:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg",
    title: "오아시스 리스",
    day: "2/21(월)~2/27(일)",
    money: 79000,
  },
  {
    id: 3,
    image:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg",
    title: "클래식 핸드타이드",
    day: "2/28(월)~3/6(일)",
    money: 79000,
  },
];

const imageView = document.querySelector(".image-view");

//const firstImageBox = imageView.querySelector(".first-image-box");
const firstImage = imageView.querySelector("#first-image");

//const secondImageBox = imageView.querySelector(".second-image-box");
const secondImage = imageView.querySelector("#second-image");

//const thirdImageBox = imageView.querySelector(".third-image-box");
const thiirddImage = imageView.querySelector("#third-image");

const leftBtn = imageView.querySelector("#left-btn");
const rigtBtn = imageView.querySelector("#right-btn");

const ImageView = () => {
  console.log("this is ImageView");
  let imageInfoIndex = 0;

  const handleClickLeftMove = (e) => {
    if (imageInfoIndex === 0) {
      imageInfoIndex = imageInfo.length - 1;
    } else {
      imageInfoIndex -= 1;
    }
    console.log(imageInfoIndex);
    firstImage.src = imageInfo[imageInfoIndex].image;
  };

  const handleClickRightMove = (e) => {
    if (imageInfoIndex === imageInfo.length - 1) {
      imageInfoIndex = 0;
    } else {
      imageInfoIndex += 1;
    }
    console.log(imageInfoIndex);
    firstImage.src = imageInfo[imageInfoIndex].image;
  };

  firstImage.addEventListener("click", () => {
    console.log("aa");
  });
  leftBtn.addEventListener("click", handleClickLeftMove);
  rigtBtn.addEventListener("click", handleClickRightMove);
};

export default ImageView;
