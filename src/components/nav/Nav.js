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

export default Nav;
