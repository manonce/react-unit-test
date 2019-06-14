import React from 'react';
import _ from 'lodash';
import { render, fireEvent } from 'react-testing-library';
import Brittle from './Brittle';


describe('Brittle Tests', () => {
  it('should increment number', async () => {

    const wrapper = render(<Brittle />);
    let index = await wrapper.findByTestId('increment-number');
    expect(index.textContent).toEqual("0");

    fireEvent.click(wrapper.getByTestId('increment-button'))
    index = await wrapper.findByTestId('increment-number');
    expect(index.textContent).toEqual("1");
  })
})
