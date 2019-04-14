import React from 'react';
import { shallow, mount } from 'enzyme';
import Routes, { Home, News, NoMatch } from '../Routes';
import { MemoryRouter
} from 'react-router'
import { Route } from 'react-router-dom';

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(Home);
  })
  it('should show News Feed component for /news router', () => {
    expect(pathMap['/news']).toBe(News);
  })
  it('should show News Feed component techdomain for /news router', () => {
    expect(pathMap['/news/techdomain']).toBe(News);
  })
  // this test will not work as the pathmap object does not have any key for unknown routes
  // so use the test with memory router
  it('should show No match component for route not defined', ()=>{
      expect(pathMap['undefined']).toBe(NoMatch);
  })
})

describe('routes using memory router', () => {
  it('should show Home component for / router (using memory router)', () => {
    const component = mount( <MemoryRouter initialEntries = {['/']} >
        <Routes/>
      </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  })
  it('should show No match component for route not defined', () => {
    const component = mount( <MemoryRouter initialEntries = {['/unknown']} >
        <Routes/>
      </MemoryRouter>
    );
    expect(component.find(NoMatch)).toHaveLength(1);
  })
})