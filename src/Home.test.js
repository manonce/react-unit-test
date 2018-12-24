import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Home from './Home';
import './setUpTests';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should increment index', ()=>{
  const app = shallow(<Home />).instance();
  app.incrementIndex();
  expect(app.state.index).toEqual(1);
})

it('should call increment index on click of button', ()=>{
  const app = shallow(<Home />);
  const spy = jest.spyOn(app.instance(), 'incrementIndex');
  app.instance().forceUpdate()
  app.find('button#increment').simulate('click');
  expect(spy).toHaveBeenCalled();
})

it('it should display incremented index on click of button', ()=>{
  const app = shallow(<Home />);
  app.find('button#increment').simulate('click');
  expect(app.find('span#index').text()).toEqual('1');
})

it('should show name to user', ()=>{
  const app = shallow(<Home name="Techdomain"/>);
  expect(app.find('span#name').text()).toEqual('Techdomain');
})

it('should handle async function - success', async ()=>{
  global.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({name:'abc'})
  );
  const app = shallow(<Home name="Techdomain"/>).instance();
  await app.asyncFunction();
  app.forceUpdate()
  expect(app.state.data).toEqual({name:'abc'});
})

it('should handle async function - error', async ()=>{
  // fetch = jest.fn(() => new Promise((resolve, reject) => reject("Error")));
  global.fetch = jest.fn().mockImplementation(() => 
    Promise.reject({name:'abc'})
  );
  // const spy = jest.spyOn(window, 'alert');
  const app = shallow(<Home name="Techdomain"/>).instance();
  await app.asyncFunction();
  app.forceUpdate()
  expect(app.state.data).toEqual({name:'123'});
  // expect(spy).toHaveBeenCalled()
})

// it('should handle click', ()=>{
//   const spy = jest.spyOn(global, 'alert');
//   const checkbox = shallow(<App />);
//   const btn = checkbox.find('button');
//   btn.simulate('click')
//   expect(spy).toHaveBeenCalled()
// })

// it('should call alert on click', ()=>{
//   const spy = jest.spyOn(global, 'alert');
//   const checkbox = shallow(<App />).instance();
//   checkbox.handleClick()
//   expect(spy).toHaveBeenCalled()
// })

// it('should call fetch on callServer',()=>{
//   const spy = jest.spyOn(global, 'fetch');
//   const checkbox = shallow(<App />).instance();
//   checkbox.callServer()
//   expect(spy).toHaveBeenCalled()
// })