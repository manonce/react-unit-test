import React from 'react';
import {shallow} from 'enzyme';
import _ from 'lodash';
import NormalTests from './NormalTests';
import './setUpTests';


describe('Normal Tests',()=>{ 
  
  it('should initialize index to 0', ()=>{
    const app = shallow(<NormalTests />);
    expect(app.state('index')).toEqual(0);
  })
  
  it('should call increment index on click of button', ()=>{
    const app = shallow(<NormalTests />);
    const spy = jest.spyOn(app.instance(), 'incrementIndex');
    app.instance().forceUpdate();
    app.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  })

  it('should increment index - function test',()=>{
    const app = shallow(<NormalTests />);
    expect(app.state('index')).toEqual(0);
    app.instance().incrementIndex();
    expect(app.state('index')).toEqual(1);
  })

  it('should increment index - button test',()=>{
    const app = shallow(<NormalTests />);
    expect(app.state('index')).toEqual(0);
    app.find('button').simulate('click');
    expect(app.state('index')).toEqual(1);
  })

  it('it should display incremented index on click of button', ()=>{
    const app = shallow(<NormalTests />);
    app.find('button').simulate('click');
    expect(app.find('span#index').text()).toEqual('1');
  })
})
