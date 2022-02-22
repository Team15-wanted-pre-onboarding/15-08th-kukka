import "@babel/polyfill";
import "normalize-scss";
import "./index.scss";
import Nav from "./components/nav/Nav";
import VideoView from "./components/VideoView/VideoView";
import ImageView from "./components/imageView/ImageView";
import BannerView from "./components/bannerView/BannerView";
import Footer from "./components/footer/Footer";
import PopView from "./components/popView/PopView";

const app = (function () {
  Nav();
  VideoView();
  ImageView();
  BannerView();
  Footer();
  PopView();
})();

console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);
