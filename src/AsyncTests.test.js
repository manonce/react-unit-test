import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import waitUntil from 'async-wait-until';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import _ from 'lodash';
import AsyncTests from './AsyncTests';
import './setUpTests';


describe('AsyncTests',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AsyncTests />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should handle async function - success', async (done)=>{
    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({name:'abc'})
    );
    const app = shallow(<AsyncTests/>);
    app.setState({
      data:[]
    })
    app.instance().asyncFunction();
    await waitUntil(()=>{
       return !_.isEmpty(app.state('data'))
    })
    expect(app.state('data')).toEqual({name:'abc'})
    done();
  })

  it('should handle async function - error', async (done)=>{
    global.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({error:'There was some error'})
    );
    const app = shallow(<AsyncTests/>);
    app.setState({
      data:[]
    })
    app.instance().asyncFunction();
    await waitUntil(()=>{
       return !_.isEmpty(app.state('data'))
    })
    expect(app.state('data')).toEqual({error:'There was some error'})
    done();
  })

  it('should handle async function - success wo async await', (done)=>{
    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({name:'abc'})
    );
    const app = shallow(<AsyncTests />);
    app.setState({
      data:[]
    })
    app.instance().asyncFunction();
    waitUntil(()=>{
       return !_.isEmpty(app.state('data'))
    }).then(()=>{
      expect(app.state('data')).toEqual({name:'abc'})
      done();
    })
  })

  it('should check timeout fn',async (done)=>{
    const app = shallow(<AsyncTests />);
    expect(app.state('index')).toEqual(0);
    app.instance().timeoutFn()
    await waitUntil(()=>{
      return app.state('index') !== 0
    })
    expect(app.state('index')).toEqual(10);
    done()
  })


  it('should check timeout fn',(done)=>{
    // so the main point to note is done
    // by calling done, it will wait for the function to complete
    const app = shallow(<AsyncTests />);
    expect(app.state('index')).toEqual(0);
    app.instance().timeoutFn()
    setTimeout(()=>{
      expect(app.state('index')).toEqual(10);
      done()
    }, 1001)
  })

  it('should check timeout fn - timeout',()=>{
    // so the main point to note is done
    // by calling done, it will wait for the function to complete
    jest.useFakeTimers();
    const app = shallow(<AsyncTests />);
    expect(app.state('index')).toEqual(0);
    app.instance().timeoutFn();
    jest.runAllTimers();
    expect(app.state('index')).toEqual(10);
    jest.useRealTimers();
  })

//   it('should handle axios function - success', async (done)=>{
//     const app = shallow(<AsyncTests />);
//     app.setState({
//       data:[]
//     })
//     app.instance().axiosFn();
//     await waitUntil(()=>{
//       console.log(app.state('data'))
//        return !_.isEmpty(app.state('data'))
//     })
//     expect(app.state('data')).toEqual({name:'abc'})
//     done();
//   })


  it('should handle axios function - success', async (done)=>{
    // global.axios = {
    //     get: jest.fn().mockImplementation(() => 
    //   Promise.resolve({data:{name:'abc'}})
    // )}
//     global.axios.get = jest.fn().mockImplementation(() => 
//     Promise.resolve({data:{name:'abc'}})
//   );
//   axios.get.mockImplementation(() => Promise.resolve({data:{name:'abc'}}))
    const mock = new MockAdapter(axios);
    mock.onGet(/.*/g).reply(200, {
        name: 'abc'
    });
    const app = shallow(<AsyncTests />);
    app.setState({
      data:[]
    });
    app.instance().axiosFn();
    await waitUntil(()=>{
        return !_.isEmpty(app.state('data'));
    });
    expect(app.state('data')).toEqual({name:'abc'})
    done();
  })

  it('should test interval functions', ()=>{
    jest.useFakeTimers();
    const app = shallow(<AsyncTests />);
    expect(app.state('index')).toEqual(0);
    app.instance().intervalFn();
    jest.advanceTimersByTime(5000);
    expect(app.state('index')).toEqual(1);
    jest.useRealTimers();
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
})
