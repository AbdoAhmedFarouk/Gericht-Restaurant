import React, { Fragment } from "react";

const ParagraphBtn = ({ style, pClassName, pTxt, btnClassName, btnTxt }) => {
  return (
    <Fragment>
      <p className={pClassName} style={style}>
        {pTxt}
      </p>
      <button type="button" className={btnClassName}>
        {btnTxt}
      </button>
    </Fragment>
  );
};

export default ParagraphBtn;
