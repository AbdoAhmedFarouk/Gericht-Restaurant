import React from "react";
import "./Header.css";

import { images } from "../../constants";
import { ParagraphBtn, SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <ParagraphBtn
          pTxt="Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus"
          btnTxt="Explore Menu"
          style={{ margin: "2rem 0" }}
          btnClassName="custom__button"
          pClassName="p__opensans"
        />
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="headerImg" />
      </div>
    </div>
  );
};

export default Header;
