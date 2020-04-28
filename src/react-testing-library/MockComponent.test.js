/* eslint-disable import/first */
import React from 'react';
import { render } from 'react-testing-library';
jest.mock('axios', () => {
  return {
    __esModule: true,
    default: jest.fn()
  }
});
import MockComponent from '../Mocks';

describe('Mocks', () => {
  it('should render the name', (done) => {
    const axios = require('axios');
    jest.spyOn(axios, 'default').mockResolvedValue({
      name: 'abc'
    })
    const wrapper = render(<MockComponent/>);
    process.nextTick(()=>{
      expect(wrapper.queryAllByText('This is a mock component abc')).toHaveLength(1);
      done();
    })
  })

  it('should render error', (done) => {
    const axios = require('axios');
    jest.spyOn(axios, 'default').mockRejectedValue()
    const wrapper = render(<MockComponent/>);
    process.nextTick(()=>{
      expect(wrapper.queryAllByText('Error fetching data')).toHaveLength(1);
      done();
    })
  })
})