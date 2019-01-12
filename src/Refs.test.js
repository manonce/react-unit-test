import React from 'react';
import { shallow, mount } from 'enzyme';
import Refs from './Refs';

describe('refs', ()=>{
    it('should focus on input element on load', ()=>{
        const component = mount(<Refs/>);
        const input = component.find('input#firstname');
        expect(input.getDOMNode() === document.activeElement).toBeTruthy();
    })
})