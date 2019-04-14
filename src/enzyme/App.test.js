import React from 'react';
// import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../App';
import Normal from '../Normal';
import AsyncTests from '../AsyncTests';

describe('<App />', () => {
  it('renders one <Normal /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Normal)).toHaveLength(1);
  });

  it('renders one <AsyncTests /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AsyncTests)).toHaveLength(1);
  });

})