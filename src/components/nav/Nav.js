import "./Nav.scss";

const headerNav = document.querySelector(".nav-view");

const Nav = () => {
  const scrollClassAdd = (e) => {
    //console.log(window.scrollY);
    console.dir(e.path[1].scrollY);
    if (window.scrollY === 0) {
      headerNav.classList.remove("has_shadow");
      console.log("맨위에");
    } else {
      headerNav.classList.add("has_shadow");
      console.log("스크롤중");
    }
    headerNav.classList.add("has_shadow");
  };
  window.addEventListener("scroll", scrollClassAdd);
};

export default Nav;
