import "./Nav.scss";

const headerNav = document.querySelector(".nav-view");

const Nav = () => {
  const scrollClassAdd = () => {
    if (window.scrollY === 0) {
      headerNav.classList.remove("has_shadow");
    } else {
      headerNav.classList.add("has_shadow");
    }
  };
  window.addEventListener("scroll", scrollClassAdd);
};

// document.querySelector(".d1").click(function () {
//   document.querySelector(".contact-layout").scrollIntoView(true);
// });

export default Nav;
