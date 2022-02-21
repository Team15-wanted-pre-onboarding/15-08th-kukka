import "./PopView.scss";

const PopView = () => {
  const popClose = document.querySelector(".close-pop_x");
  const popCloseToday = document.querySelector(".close-pop_today");
  const displayPop = document.querySelector(".pop-view");

  popClose.addEventListener("click", (e) => {
    displayPop.style.display = "none";
  });
  popCloseToday.addEventListener("click", (e) => {
    displayPop.style.display = "none";
  });
};

export default PopView;
