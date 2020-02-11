import React from 'react';
import Spacer from 'terra-spacer';
import { injectIntl, intlShape } from 'react-intl';

const HomePage = ({ intl }) => (
  <Spacer padding="medium">
    <h1>{intl.formatMessage({ id: 'HelloWorld' })}</h1>
  </Spacer>
);

HomePage.propTypes = {
  intl: intlShape
};

export default injectIntl(HomePage);
