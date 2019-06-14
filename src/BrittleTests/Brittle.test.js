import React from 'react';
import { shallow } from 'enzyme';
import Brittle from './Brittle';

describe('Brittle tests', () => {
    it('should increment number', ()=>{
        const wrapper = shallow(<Brittle />);
        expect(wrapper.find('[data-testid="increment-button"]')).toHaveLength(1)
    })

    it('should show the number', () => {
        const wrapper = shallow(<Brittle />);
        expect(wrapper.find('[data-testid="increment-number"]')).toHaveLength(1)
    })

    it('should increment number - implementation test', () => {
        const wrapper = shallow(<Brittle />);
        wrapper.instance().incrementNumber();
        expect(wrapper.state('number')).toEqual(1);
    })

    it('should increment number', () => {
        const wrapper = shallow(<Brittle />);
        expect(wrapper.find('[data-testid="increment-number"]').text()).toEqual('0')
        wrapper.find('[data-testid="increment-button"]').simulate('click');
        expect(wrapper.find('[data-testid="increment-number"]').text()).toEqual('1')
    })
})
