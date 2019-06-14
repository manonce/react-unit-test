#### Testing in react

---

There are many ways to test in react. We are going to look into testing in react using enzyme and jest library. Normally, you would have written unit tests, integration tests and end to end tests. What do these tests mean in the context of react? For react, you can write unit tests using jest.

#### Component testing in react

- Normal function call testing
- Access state and props in test
- Async tests - testing the success and error conditions

#### Snapshot testing in react

---

- Creating snapshot
- Updating snapshot when change is legitimate
- Updated snapshot of the wrong component, how to rollback
- Is it really helpful

#### End to end testing

---

- Using protractor

#### Other topics

---

- Testing the sagas and reducers
- Code coverage report (using Istanbul?)
- CI with react
- What are chai, mocha, and jasmine
- What is react-test-renderer

<br/>
##### Normal function call testing
If you have a function inside the component, you can access it directly using the instance of the component. For example, in the below example, we can test following things

- The increment function should increment the index by 1
- The button should call the increment function on click
- On click of the button, the incremented number should be shown to the user

<div class="container p-0">
<div class="row no-gutters" style="background:#eee;">
<div class="col-6 pr-1">
```
class App extends Component {
  constructor(){
    super()
    this.incrementIndex = this.incrementIndex.bind(this);
    this.state = {
      index: 0
    }
  }
  incrementIndex(){
    this.setState({
      index: this.state.index+1
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.index} 
        <button onClick={this.incrementIndex}>Increment index</button>
      </div>
    );
  }
}
```
</div>
<div class="col-6 pl-1" style="border-left:2px dashed #aaa;">
```javascript
it('should increment index', ()=>{
  const app = shallow(<App />).instance();
  app.incrementIndex();
  expect(app.state.index).toEqual(1);
})

it('should call increment index on click of button', ()=>{
const app = shallow(<App />);
const spy = jest.spyOn(app.instance(), 'incrementIndex');
app.instance().forceUpdate()
app.find('button').simulate('click');
expect(spy).toHaveBeenCalled();
})

it('it should display incremented index on click of button', ()=>{
const app = shallow(<App />);
app.find('button').simulate('click');
expect(app.find('span#index').text()).toEqual('1');
})

```
</div>
</div>
</div>

<br/>
##### Access state and props in test

If you want to access the state of the component inside the test, you can do so as following
<div class="container p-0">
<div class="row no-gutters" style="background:#eee;">
<div class="col-6 pr-1">
```

class App extends Component {
render() {
const { name } = this.props;
return (
<div className="App">
<span id="name">{name}</span>
</div>
);
}
}

````
</div>
<div class="col-6 pl-1" style="border-left:2px dashed #aaa;">
```javascript
it('should show name', ()=>{
  // passing props to function
  const app = shallow(<App name="Techdomain"/>);
  expect(app.find("span#name").text()).toEqual("Techdomain");
})
````

</div>
</div>
</div>
<br/>
<div class="container p-0">
<div class="row no-gutters" style="background:#eee;">
<div class="col-6 pr-1">
```
class App extends Component {
  constructor(){
    super()
    this.incrementIndex = this.incrementIndex.bind(this);
    this.state = {
      index: 0
    }
  }
  incrementIndex(){
    this.setState({
      index: this.state.index+1
    })
  }
  render() {
    const { name } = this.props;
    return (
      <div className="App">
        <button onClick={this.incrementIndex}>Increment index</button>
      </div>
    );
  }
}
```
</div>
<div class="col-6 pl-1" style="border-left:2px dashed #aaa;">
```javascript
it('should have initial index as 0', ()=>{
  const app = shallow(<App name="Techdomain"/>);
  // either app.state().index, or app.state('index')
  expect(app.state().index).toEqual(0);
})

it('should increment index state in incrementIndex', ()=>{
const app = shallow(<App name="Techdomain"/>);
app.instance().incrementIndex();
// either app.state().index, or app.state('index')
expect(app.state('index')).toEqual(1);
})

```
</div>
</div>
</div>

<br/>

##### Async tests
<div class="container p-0">
<div class="row no-gutters" style="background:#eee;">
<div class="col-6 pr-1">
```

class App extends Component {
constructor(){
super()
this.asyncFunction = this.asyncFunction.bind(this);
this.state = {
data: []
}
}
asyncFunction(){
fetch('http://google.com/somedata.json').then((data)=>{
this.setState({
data: data
})
}).catch(error=>{
this.setState({
data: {name:'123'}
})
})
}
render() {
return (
<div className="App">
<button id="async" onClick={this.asyncFunction}>Async Function</button>
</div>
);
}
}

````
</div>
<div class="col-6 pl-1" style="border-left:2px dashed #aaa;">
```javascript
it('should handle async function - success', async ()=>{
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({name:'abc'})
  );
  const app = shallow(<App/>).instance();
  app.asyncFunction();
  setTimeout(()=>{
    expect(app.state.data).toEqual({name:'abc'});
  },0);
})

it('should handle async function - error', async ()=>{
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.reject({name:'abc'})
  );
  const app = shallow(<App/>).instance();
  app.asyncFunction();
  setTimeout(()=>{
    console.log('app.state is ',app.state('data'));
    expect(app.state('data')).toEqual({name:'123'});
  },0);
})
````

</div>
</div>
</div>
