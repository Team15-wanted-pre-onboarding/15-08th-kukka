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

document.querySelector(".nav_movie").addEventListener("click", function () {
  document.querySelector(".video-ratio").scrollIntoView(true);
});

document.querySelector(".nav_teach").addEventListener("click", function () {
  document.querySelector(".image-header").scrollIntoView(true);
});

export default Nav;
