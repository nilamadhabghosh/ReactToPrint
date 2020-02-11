import React from 'react';
import { shallowWithIntl } from '@healtheintent/app-sdk';
import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const wrapper = shallowWithIntl(
      <HomePage.WrappedComponent />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
