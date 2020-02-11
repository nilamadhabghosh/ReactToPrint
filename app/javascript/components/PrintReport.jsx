/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-return-assign */
import React, { useRef } from "react";
import classNames from "classnames/bind";
import ReactToPrint from "react-to-print";
import Button from "terra-button";
import DetailViewDivided from "./DetailViewDivided";
import styles from "./Print.scss";

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prefer-stateless-function

const Example = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button
            text="Print"
            // icon={<IconPrint />}
          />
        )}
        content={() => componentRef.current}
        // pageStyle={cx("detail-view")}
        // removeAfterPrint={false}
        // copyStyles
      />
      <DetailViewDivided ref={componentRef} />
    </div>
  );
};

export default Example;
