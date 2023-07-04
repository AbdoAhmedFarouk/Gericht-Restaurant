import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu section__padding flex__center" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, idx) => (
              <MenuItem
                key={idx}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menuImg" />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cock, idx) => (
              <MenuItem
                key={idx}
                price={cock.price}
                title={cock.title}
                tags={cock.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
