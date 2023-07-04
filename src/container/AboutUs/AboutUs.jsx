import React from "react";
import "./AboutUs.css";

import { images } from "../../constants";
import { ParagraphBtn } from "../../components";

const Content = ({ history, title }) => {
  return (
    <div
      className={
        history ? "app__aboutus-content_history" : "app__aboutus-content_about"
      }
    >
      <h1 className="headtext__cormorant">{title}</h1>
      <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <ParagraphBtn
        pTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec
        aliquet eu proin mauris et."
        pClassName="p__opensans"
        btnTxt="Know More"
        btnClassName="custom__button"
      />
    </div>
  );
};

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <Content history={false} title="About Us" />
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>
        <Content history={true} title="Our History" />
      </div>
    </div>
  );
};

export default AboutUs;
