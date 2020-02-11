import React from 'react';
import moment from 'moment';
import '../../assets/stylesheets/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <p>Printed on: {moment().format('lll')}</p>
    </div>
  );
}
