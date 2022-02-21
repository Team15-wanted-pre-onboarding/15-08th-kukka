import "./Footer.scss";

const Footer = () => {
  const snsIcon = document.querySelectorAll(".pop-event");
  const displayPop = document.querySelector(".pop-view");

  for (let i = 0; i < snsIcon.length; i++) {
    snsIcon[i].addEventListener("click", (e) => {
      displayPop.style.display = "block";
    });
  }
};

export default Footer;
