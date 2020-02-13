/* eslint-disable quotes */
import React from "react";
import classNames from "classnames/bind";
import LabelValueView from "terra-clinical-label-value-view";
import DetailView from "terra-clinical-detail-view";
import Image from "terra-image";
import ComponentToPrint from "./ComponentToPrint";
import Footer from "./Footer";
import "../../assets/stylesheets/DetailViewDivided.css";
import styles from "./DetailView.scss";
import cerner from "../../assets/images/2011.Cerner.logo.png";

const cx = classNames.bind(styles);

const item1 = <LabelValueView label="Patient Name" textValue="Sam Smith" />;
const item2 = <LabelValueView label="Date of Birth" textValue="02/01/1999" />;
const item3 = <LabelValueView label="Current Age" textValue="6" />;
// const item4 = (<ComponentToPrint />);

// eslint-disable-next-line react/prefer-stateless-function
class DetailViewDivided extends React.Component {
  render() {
    return (
      <div className={cx("detailview")}>
        <div className={cx("logoheader")}>
          <Image
            id="orglogo"
            src={cerner}
            variant="rounded"
            placeholder="Org Logo"
            alt="invalid image"
          />
          <address id="orgaddress">
            Written by Cerner.
            <br />
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
        </div>
        <h2>Immunization Record</h2>
        <hr />
        <DetailView
          // className="styleview"
          details={[
            <DetailView.DetailList>
              <DetailView.DetailListItem item={item1} />
              <DetailView.DetailListItem item={item2} />
              <DetailView.DetailListItem item={item3} />
            </DetailView.DetailList>
          ]}
          isDivided={false}
        />
        <ComponentToPrint />
        <Footer />
      </div>
    );
  }
}

export default DetailViewDivided;
